import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../services/browser-history';

const App = () => (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route path="/" exact>
        <MainPage/>
      </Route>
      <Route path="/login" exact>
        <SignIn/>
      </Route>
      <PrivateRoute exact
        path="/favorites"
        render={() => <Favorites/>}
      />
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
