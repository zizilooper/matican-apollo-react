import React from "react";
import { DataContextProvider } from "./DataContext";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import GqlData from "./GqlData";
import Navbar from "./Navbar";
import UserInfo from "./UsersInfo";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/"
});

const Router = () => (
  <ApolloProvider client={client}>
    <DataContextProvider>
    <BrowserRouter>
      <Navbar />
      <Switch>
      
        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/gqlData" component={GqlData} />
        <Route exact path="/usersInfo" component={UserInfo} />
      </Switch>
    </BrowserRouter>
    </DataContextProvider>
  </ApolloProvider>
);

export default Router;
