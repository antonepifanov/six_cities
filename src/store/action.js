export const ActionType = {
  CHANGE_CITY: `cities/change`,
  CHANGE_SORTING: `sorting/change`,
  SET_ACTIVE_MAP_PIN: `map-pin/set-active`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
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
};
