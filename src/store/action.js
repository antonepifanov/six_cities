export const ActionType = {
  CHANGE_CITY: `cities/change`,
  CHANGE_OFFERS: `offers/change`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};
