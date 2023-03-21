import React from 'react';
import ReactDOM from 'react-dom';
import {PLACE_CARDS, PLACES_COUNT} from './mock-data';
import App from './components/app/app';

ReactDOM.render(
    <App
      placeCards={PLACE_CARDS}
      placeCount={PLACES_COUNT}
    />,
    document.querySelector(`#root`)
);
