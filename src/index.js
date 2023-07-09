import React from 'react';
import ReactDOM from 'react-dom';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import {PLACE_CARDS, PLACES_COUNT} from './mock-data';
import App from './components/app/app';

ReactDOM.render(
    <App
      placeCards={offers}
      reviews={reviews}
      placeCount={offers.length}
    />,
    document.querySelector(`#root`)
);
