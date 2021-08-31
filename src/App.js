import { Route, Switch, Redirect } from 'react-router-dom';
import AuthorizedApolloProvider from "./Apollo/client";
import LayoutHOC from './HOC/Layout/LayoutHOC';
import Profile from './Pages/Profile/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import Orders from './Pages/Orders/Orders';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Lab from './Pages/Lab/Lab';
import RestaurantForm from './Pages/Forms/RestaurantForm';
import MenusForm from './Pages/Forms/MenusForm';
import React from "react";
import "./App.css";



const App = () => {
    
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        <AuthorizedApolloProvider>
            <LayoutHOC>
                <Switch>
                    <Redirect exact from='/' to='/home'/>
                    <Route path="/RestaurantForm" component={ RestaurantForm }/>
                    <Route path="/MenusForm" component={ MenusForm }/>
                    <Route path="/lab" component={ Lab }/>
                    <Route path="/about" component={ About }/>
                    <Route path="/home" component={ Home }/>
                    <Route path="/orders" component={ Orders }/>
                    <Route path="/profile" component={ Profile }/>
                    <Route path="*" render={ () => <p>NO TENGO NADA</p> }/>
                </Switch>
            </LayoutHOC>
        </AuthorizedApolloProvider>
    );
}

export default App;