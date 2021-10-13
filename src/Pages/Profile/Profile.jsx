import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { MDBIcon } from "mdb-react-ui-kit";
import { Card, Container, Row, Col } from "reactstrap";

const Profile = () => {
    const { user } = useAuth0();
    const userMetadata = user["https://graphql-api/user_metadata"];
    

    return (
        <Container>
        <Card className="card-profile shadow mt--500">
          <div className="px-4">
            <Row className="justify-content-center">
              <Col className="order-lg-2" lg="3">
                <div className="text-center mt-5">
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={user.picture}
                    />
                </div>
              </Col>
            </Row>
            <div className="text-center mt-5">
              <h3>
                {user.name }
              </h3>
              <div className="h6 font-weight-300">
                <i className="ni location_pin mr-2" />
                { user.email }
              </div>
              <div className="h6 mt-4">
                <i className="ni business_briefcase-24 mr-2" />
                Restaurante: {userMetadata.restaurant}
              </div>
            </div>
          </div>
        </Card>
      </Container>
    )
}

export default Profile;