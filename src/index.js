import React from 'react';
import ReactDOM from 'react-dom';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import App from './components/app/app';

ReactDOM.render(
    <App
      placeCards={offers}
      placeReviews={reviews}
    />,
    document.querySelector(`#root`)
);
