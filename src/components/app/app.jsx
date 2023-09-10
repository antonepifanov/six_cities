import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {OFFERS_TYPES, REVIEWS_TYPES} from '../../prop-types/prop-types';
import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import NotFoundPage from '../not-found-page/not-found-page';

const App = ({placeCards, placeReviews}) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <MainPage
          placeCards={placeCards}
        />
      </Route>
      <Route path="/login" exact>
        <SignIn/>
      </Route>
      <Route path="/favorites" exact>
        <Favorites
          placeCards={placeCards}
        />
      </Route>
      <Route path="/offer/:id" exact>
        <Room
          placeCards={placeCards}
          placeReviews={placeReviews}
        />
      </Route>
      <Route>
        <NotFoundPage/>
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  placeCards: OFFERS_TYPES,
  placeReviews: REVIEWS_TYPES,
};

export default App;
