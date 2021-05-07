import { ApolloClient, ApolloLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
import { HttpLink } from "apollo-link-http";
//import { setContext} from 'apollo-link-context'
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
    uri: "http://domivo.herokuapp.com/graphql",
});

const wsLink = new WebSocketLink({
    uri: "ws://domivo.herokuapp.com/graphql",
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

// const authMiddleware = setContext(() =>
//     getHeaders().then(token => {
//         return {
//             headers: {
//                 authorization: token || null,
//             },
//         };
//     })
// );

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([splitLink]),
});