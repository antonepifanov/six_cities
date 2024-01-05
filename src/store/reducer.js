import {CITIES_LIST, SORTING_TYPES} from '../constants/constants';
import offers from '../mocks/offers';
import reviews from '../mocks/reviews';
import {ActionType} from './action';
import {getCurrentCityOffers} from './selectors';

const initialState = {
  cities: CITIES_LIST,
  selectedCity: CITIES_LIST[0],
  offers,
  currentCityOffers: getCurrentCityOffers(offers, CITIES_LIST[0]),
  activeSorting: SORTING_TYPES.POPULAR,
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        selectedCity: action.payload,
        currentCityOffers: getCurrentCityOffers(offers, action.payload),
        activeSorting: SORTING_TYPES.POPULAR,
      };
    }

    case ActionType.CHANGE_SORTING: {
      return {
        ...state,
        activeSorting: action.payload,
      };
    }
  }

  return state;
};

export {reducer};
