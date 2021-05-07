import React from 'react'
import { gql, useQuery } from '@apollo/client';
import { MDBBtn } from 'mdb-react-ui-kit';

const hello_world = gql`
  query hello_world {
    hello_world 
  }
`;

export default function Prueba() {
    const { loading, error, data } = useQuery(hello_world);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <>
        <MDBBtn>Button</MDBBtn>
        <div>{data.hello_world}</div>  
        </>
    )
}
