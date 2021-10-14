import { HELLO } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import logo from '../../Assets/logo-hermes_N.png'
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg, Container } from 'reactstrap';

const Home = () => {
    /* const { loading, error, data } = useQuery(HELLO);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`; */
    const bckColor = '#EDD062'

    return (
        <Container>
            <Card >
                <img src= {logo} alt="Logo hermes"  width="500" height="500"/>
                <CardTitle tag="h5" >¿Quines Somos?</CardTitle>
                <CardText>
                    Somos una aplicación que por medio del uso del asistente de voz Alexa puedes hacer
                    tus pedidos a los diferentes restaurantes afiliados.

                </CardText>
                <CardTitle tag="h5">Misión</CardTitle>
                <CardText>Brindar una alternativa a las personas en la manera en la cual hacen sus domicilios</CardText>
                <CardTitle tag="h5">Visión</CardTitle>
                <CardText>Expandirnos y poder implementar nuestra aplicación en diferentes lugares como centros comerciales y/o plazas de comida</CardText>
            </Card>
        </Container>
    )
}

export default Home;