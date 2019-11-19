import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './main.scss';
import Instruments from './instruments/instruments';
import Favorites from './favorites/favorites';

function Main() {
  return (
    <main className="main">
      <Switch>
        <Route path='/instruments/:pageNum?'>
          <Instruments />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
