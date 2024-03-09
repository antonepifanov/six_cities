import {loadOffers, loadFavorites, requireAuthorization, changeFetchStatus, loadReviews, setUserName, redirectToRoute, isLoadData, getCurrentRoom, getNearPlaces, changeFavoriteStatus} from "./action";
import {AUTHORIZATION_STATUS, FETCH_STATUS, REQUEST_TIMEOUT} from "../constants/constants";
import {adaptOfferToClient, adaptOffersToClient, adaptReviewsToClient} from "./selectors";

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => adaptOffersToClient(data))
    .then((data) => dispatch(loadOffers(data)))
);

export const getFavorites = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => adaptOffersToClient(data))
    .then((data) => dispatch(loadFavorites(data)))
    .then(() => dispatch(changeFetchStatus(FETCH_STATUS.DONE)))
);

export const sendFavoriteStatus = (id, favorite) => (dispatch, _state, api) => (
  api.post(`favorite/${id}/${favorite}`)
    .then(({data}) => dispatch(changeFavoriteStatus(data)))
    .then(() => dispatch(changeFetchStatus(FETCH_STATUS.DONE)))
    .catch(() => dispatch(changeFetchStatus(FETCH_STATUS.ERROR)))
    .finally(() => setTimeout(() => (dispatch(changeFetchStatus(FETCH_STATUS.PENDING))), 5000))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(requireAuthorization(AUTHORIZATION_STATUS.AUTH));
      return data;
    })
    .then((data) => dispatch(setUserName(data.name)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AUTHORIZATION_STATUS.AUTH));
      return data;
    })
    .then((data) => dispatch(setUserName(data.name)))
    .then(() => dispatch(redirectToRoute(`/`)))
    .finally(() => dispatch(isLoadData(false)))
);

export const getRoomData = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(`/hotels/${id}`),
    api.get(`/hotels/${id}/nearby`),
    api.get(`/comments/${id}`)
  ])
  .then(([room, nearBy, reviews]) => {
    return [
      adaptOfferToClient(room.data),
      adaptOffersToClient(nearBy.data),
      adaptReviewsToClient(reviews.data),
    ];
  })
  .then(([room, nearBy, reviews]) => {
    dispatch(getCurrentRoom(room));
    dispatch(getNearPlaces(nearBy));
    dispatch(loadReviews(reviews));
  })
  .then(() => dispatch(isLoadData(true)))
  .catch(() => dispatch(changeFetchStatus(FETCH_STATUS.ERROR)))
);

export const postReview = ({rating, comment}, id) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then(({data}) => adaptReviewsToClient(data))
    .then((data) => dispatch(loadReviews(data)))
    .then(() => dispatch(changeFetchStatus(FETCH_STATUS.DONE)))
    .catch(() => dispatch(changeFetchStatus(FETCH_STATUS.ERROR)))
    .finally(() => setTimeout(() => (dispatch(changeFetchStatus(FETCH_STATUS.PENDING))), REQUEST_TIMEOUT))
);
