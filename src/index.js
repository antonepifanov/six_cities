import React from 'react';
import ReactDOM from 'react-dom';
import {PLACE_CARDS} from './mock-data';
import App from './components/app/app';

ReactDOM.render(
    <App
      placeCards={PLACE_CARDS}
    />,
    document.querySelector(`#root`)
);
