export const ActionType = {
  CHANGE_CITY: `cities/change`,
  CHANGE_SORTING: `sorting/change`,
  SET_ACTIVE_MAP_PIN: `map-pin/set-active`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_USER_NAME: `user/setName`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  GET_CURRENT_ROOM: `data/getCurrentRoom`,
  IS_LOAD_DATA: `data/loading`,
  CHANGE_FETCH_STATUS: `data/changeFetchStatus`,
  LOAD_REVIEWS: `data/loadReviews`,
  GET_NEAR_PLACES: `data/getNearPlaces`,
};

export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const changeSort = (sorting) => ({
  type: ActionType.CHANGE_SORTING,
  payload: sorting,
});

export const setActivePin = (pin) => ({
  type: ActionType.SET_ACTIVE_MAP_PIN,
  payload: pin,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setUserName = (name) => ({
  type: ActionType.SET_USER_NAME,
  payload: name,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const isLoadData = (status) => ({
  type: ActionType.IS_LOAD_DATA,
  payload: status,
});

export const changeFetchStatus = (fetchStatus) => ({
  type: ActionType.CHANGE_FETCH_STATUS,
  payload: fetchStatus,
});

export const getCurrentRoom = (room) => ({
  type: ActionType.GET_CURRENT_ROOM,
  payload: room,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const getNearPlaces = (nearPlaces) => ({
  type: ActionType.GET_NEAR_PLACES,
  payload: nearPlaces,
});
