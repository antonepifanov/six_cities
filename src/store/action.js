export const ActionType = {
  CHANGE_CITY: `cities/change`,
  CHANGE_SORTING: `sorting/change`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSorting: (sorting) => ({
    type: ActionType.CHANGE_CITY,
    payload: sorting,
  }),
};
