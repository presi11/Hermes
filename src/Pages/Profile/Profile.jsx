import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { MDBIcon } from "mdb-react-ui-kit";

const Profile = () => {
    const { user } = useAuth0();
    const userMetadata = user["https://graphql-api/user_metadata"];
    

    return (
        <>
            <div>
                <img
                    src={ user.picture }
                    alt="Profile"
                    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                />
            </div>
            <h2>{ user.name }
                <MDBIcon
                    fas icon="check-circle"
                    color={ user.email_verified ? 'success' : 'dark' }
                />
                
            </h2>
           <h2>{userMetadata.restaurant}</h2>
            <p>{ user.email }</p>
        </>
    )
}

export default Profile;