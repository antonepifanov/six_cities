export const ActionType = {
  CHANGE_CITY: `cities/change`,
  CHANGE_SORTING: `sorting/change`,
  SET_ACTIVE_MAP_PIN: `map-pin/set-active`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_USER_NAME: `user/setName`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
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
};
