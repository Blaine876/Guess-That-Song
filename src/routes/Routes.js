import React from "react";

import { Switch, Route } from "react-router-dom";

import {
  Login,
  Home,
  Teams,
  Games,
  GuessSong,
  GuessArtist,
  MusicalChairs,
} from "../pages";

import { getToken } from "../utils/spotify";

const Routes = () => {
  const myToken = JSON.stringify(getToken());
  console.log(`my token is: ${myToken}`);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/teams" component={Teams} />
      <Route path="/games" component={Games} />
      <Route path="/login" component={Login} />
      <Route path="/guessSong" component={GuessSong} />
      <Route path="/guessArtist" component={GuessArtist} />
      <Route path="/musicalChairs" component={MusicalChairs} />
    </Switch>
  );
};

export default Routes;
