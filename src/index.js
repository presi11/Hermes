import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";

ReactDOM.render(
    <Auth0Provider
        domain={ process.env.REACT_APP_DOMAIN }
        audience={ process.env.REACT_APP_AUDIENCE }
        clientId={ process.env.REACT_APP_CLIENTID }
        redirectUri={ window.location.origin }
        useRefreshTokens={true}
        cacheLocation="localstorage"
        scope="openid profile update:users"
    >
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Auth0Provider>,
    document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
