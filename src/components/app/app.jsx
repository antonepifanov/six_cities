import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = ({placeCards, placeCount}) => (
  <MainPage
    placeCards={placeCards}
    placeCount={placeCount}
  />
);

App.propTypes = {
  placeCards: PropTypes.array,
  placeCount: PropTypes.number.isRequired,
};

export default App;
