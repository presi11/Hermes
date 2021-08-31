import React from 'react'
import Card from "../../Components/OrderCard/Card"
import { MDBInput } from 'mdb-react-ui-kit';


const About = () => {
    return (
        <div>
            This is about
            <Card></Card>
            <MDBInput label='Example label' id='form1' type='text' />
            

        </div>
    )
}

export default About;