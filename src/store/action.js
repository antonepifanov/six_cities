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

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSorting: (sorting) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sorting,
  }),
  setActiveMapPin: (pin) => ({
    type: ActionType.SET_ACTIVE_MAP_PIN,
    payload: pin,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setUserName: (name) => ({
    type: ActionType.SET_USER_NAME,
    payload: name,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  isLoadData: (status) => ({
    type: ActionType.IS_LOAD_DATA,
    payload: status,
  }),
  changeFetchStatus: (fetchStatus) => ({
    type: ActionType.CHANGE_FETCH_STATUS,
    payload: fetchStatus,
  }),
  getCurrentRoom: (room) => ({
    type: ActionType.GET_CURRENT_ROOM,
    payload: room,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  getNearPlaces: (nearPlaces) => ({
    type: ActionType.GET_NEAR_PLACES,
    payload: nearPlaces,
  }),
};
