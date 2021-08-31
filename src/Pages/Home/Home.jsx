import { HELLO } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { MDBBtn } from 'mdb-react-ui-kit';
import logo from '../../Assets/logo-hermes_N.png'
import React from 'react';

const Home = () => {
    const { loading, error, data } = useQuery(HELLO);

    if (loading) return 'Loading...';
    if (error) return `Error! ${ error.message }`;

    return (
        <>
            <MDBBtn>Button</MDBBtn>
            <img src= {logo} alt="Logo hermes" />
            <div>{ data.hello_world }</div>
           
        </>
    )
}

export default Home;