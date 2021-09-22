import React from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import DeckBuilder from '../screens/DeckBuilder';

import Home from '../screens/Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/deckbuilder">
        <DeckBuilder />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
