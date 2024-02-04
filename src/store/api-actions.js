import {ActionCreator} from "./action";
import {AUTHORIZATION_STATUS, FETCH_STATUS, REQUEST_TIMEOUT} from "../constants/constants";
import {adaptOfferToClient, adaptOffersToClient} from "./selectors";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => adaptOffersToClient(data))
    .then((data) => dispatch(ActionCreator.loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AUTHORIZATION_STATUS.AUTH));
      return data;
    })
    .then((data) => dispatch(ActionCreator.setUserName(data.name)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AUTHORIZATION_STATUS.AUTH));
      return data;
    })
    .then((data) => dispatch(ActionCreator.setUserName(data.name)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
    .finally(() => dispatch(ActionCreator.isLoadData(false)))
);

export const fetchOffer = (roomId) => (dispatch, _getState, api) => (
  api.get(`/hotels/${roomId}`)
    .then(({data}) => adaptOfferToClient(data))
    .then((data) => dispatch(ActionCreator.loadRoom(data)))
    .finally(() => dispatch(ActionCreator.isLoadData(true)))
);

export const postReview = ({rating, comment}, id) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then(() => dispatch(ActionCreator.changeFetchStatus(FETCH_STATUS.DONE)))
    .catch(() => dispatch(ActionCreator.changeFetchStatus(FETCH_STATUS.ERROR)))
    .finally(() => setTimeout(() => (dispatch(ActionCreator.changeFetchStatus(FETCH_STATUS.PENDING))), REQUEST_TIMEOUT))
);
