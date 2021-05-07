import { Route, Switch, Redirect } from 'react-router-dom';
import React from "react";
import "./App.css";
import { client } from "./Apollo/client";
import { ApolloProvider } from '@apollo/client';
import Prueba from './prueba'
import About from './Pages/About'
import Home from './Pages/Home'
import Ordes from './Pages/Ordes'
import Profile from './Pages/Profile'
import { useAuth0 } from "@auth0/auth0-react";
import Layout from './HOC/Layout'

function App() {
 
    const {  isLoading } = useAuth0();
  
    if (isLoading) {
      return <div>Loading ...</div>;
    }
  return (
    <ApolloProvider client={client}>
      <Layout>
      <Switch>
        <Redirect exact from='/' to='/prueba' />
        <Route path="/prueba" component={Prueba} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/ordes" component={Ordes} />
        <Route path="/profile" component={Profile} />
        <Route path="*" render={() => <p>NO TENGO NADA</p>} />
      </Switch>
      </Layout>
    </ApolloProvider>
  );
}

export default App;