import {CITIES_LIST} from '../constants/constants';
import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {ActionType} from './action';

const initialState = {
  cities: CITIES_LIST,
  selectedCity: CITIES_LIST[0],
  offers,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        selectedCity: action.payload
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
