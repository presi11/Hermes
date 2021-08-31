import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { MDBIcon } from "mdb-react-ui-kit";

const Profile = () => {
    const { user } = useAuth0();

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
           <h1>{user.user_metadata}</h1>
            <p>{ user.email }</p>
        </>
    )
}

export default Profile;