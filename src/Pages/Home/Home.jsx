import { gql, useQuery } from '@apollo/client';
import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';

const HELLO = gql`
    query hello_world {
        hello_world
    }
`;

const Home = () => {
    const { loading, error, data } = useQuery(HELLO);

    if (loading) return 'Loading...';
    if (error) return `Error! ${ error.message }`;

    return (
        <>
            <MDBBtn>Button</MDBBtn>
            <div>{ data.hello_world }</div>
        </>
    )
}

export default Home;