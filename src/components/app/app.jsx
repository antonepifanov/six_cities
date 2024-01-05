import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import NotFoundPage from '../not-found-page/not-found-page';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <MainPage/>
      </Route>
      <Route path="/login" exact>
        <SignIn/>
      </Route>
      <Route path="/favorites" exact>
        <Favorites/>
      </Route>
      <Route path="/offer/:id" exact>
        <Room/>
      </Route>
      <Route>
        <NotFoundPage/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
