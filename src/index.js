import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {requireAuthorization} from './store/action';
import {checkAuth} from "./store/api-actions";
import {AUTHORIZATION_STATUS} from "./constants/constants";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(() => store.dispatch(requireAuthorization(AUTHORIZATION_STATUS.NO_AUTH)));

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
