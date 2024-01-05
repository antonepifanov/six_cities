export const ActionType = {
  CHANGE_CITY: `cities/change`,
  CHANGE_SORTING: `sorting/change`,
  SET_ACTIVE_MAP_PIN: `map-pin/set-active`,
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
};
