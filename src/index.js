import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import App from './components/app/app';
import {reducer} from './store/reducer';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App
        placeCards={offers}
        placeReviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
