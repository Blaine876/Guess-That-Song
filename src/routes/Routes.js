import React from "react";

import { Switch, Route } from "react-router-dom";

import { Login, Home, Teams, Games } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/teams" component={Teams} />
      <Route path="/games" component={Games} />
    </Switch>
  );
};

export default Routes;
