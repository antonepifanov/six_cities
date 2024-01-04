import React, {useState} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import SignIn from '../sign-in/sign-in';
import NotFoundPage from '../not-found-page/not-found-page';

const App = () => {
  const [activeItem, setActiveItem] = useState(null);
  const onMouseEnterHandler = (item) => setActiveItem(item);
  const onMouseLeaveHandler = () => setActiveItem(null);

  return <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <MainPage
          onMouseEnterHandler={onMouseEnterHandler}
          onMouseLeaveHandler={onMouseLeaveHandler}
          activeItem={activeItem}
        />
      </Route>
      <Route path="/login" exact>
        <SignIn/>
      </Route>
      <Route path="/favorites" exact>
        <Favorites
          onMouseEnterHandler={onMouseEnterHandler}
          onMouseLeaveHandler={onMouseLeaveHandler}
        />
      </Route>
      <Route path="/offer/:id" exact>
        <Room
          onMouseEnterHandler={onMouseEnterHandler}
          onMouseLeaveHandler={onMouseLeaveHandler}
          activeItem={activeItem}
        />
      </Route>
      <Route>
        <NotFoundPage/>
      </Route>
    </Switch>
  </BrowserRouter>;
};

export default App;
