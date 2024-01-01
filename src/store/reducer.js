import offers from '../mocks/offers';
import {ActionType} from './action';

const initialState = {
  selectedCity: `Amsterdam`,
  offers: offers.filter((offer) => offer.city.name === `Amsterdam`),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        selectedCity: action.payload,
        offers: offers.filter((offer) => offer.city.name === action.payload)
      };

    case ActionType.CHANGE_OFFERS:
      return {
        ...state,
        offers: action.payload
      };
  }

  return state;
};


export {reducer};
