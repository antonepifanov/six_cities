import {ActionCreator} from "./action";
import {AUTHORIZATION_STATUS} from "../constants/constants";
import {adaptOffersToClient} from "./selectors";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => adaptOffersToClient(data))
    .then((data) => dispatch(ActionCreator.loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AUTHORIZATION_STATUS.AUTH)))
    .catch(() => {})
);
