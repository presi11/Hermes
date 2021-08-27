import { ApolloClient, ApolloLink, InMemoryCache, split, ApolloProvider } from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from 'apollo-link-context';
import { useAuth0 } from "@auth0/auth0-react";

const AuthorizedApolloProvider = ({ children }) => {
    const { getAccessTokenSilently } = useAuth0();

    const httpLink = new createUploadLink({
        uri: "https://domivo.herokuapp.com/graphql",
    });

    const wsLink = new WebSocketLink({
        uri: "wss://domivo.herokuapp.com/graphql",
        options: {
            reconnect: true
        }
    });

    const splitLink = split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        wsLink,
        httpLink,
    );

    const authMiddleware = setContext(async () => {
            const token = await getAccessTokenSilently();
            return {
                headers: {
                    authorization: `Bearer ${token}` || null,
                },
            };
        }
    );

    const apolloClient = new ApolloClient({
        link: ApolloLink.from([authMiddleware, splitLink]),
        cache: new InMemoryCache()
    });

    return (
        <ApolloProvider client={ apolloClient }>
            { children }
        </ApolloProvider>
    );
}


export default AuthorizedApolloProvider;