import {CITIES_LIST, SORTING_TYPES, AUTHORIZATION_STATUS} from '../constants/constants';
import reviews from '../mocks/reviews';
import {ActionType} from './action';
import {getCurrentCityOffers, getCurrentCityOffersBySorting} from './selectors';

const initialState = {
  cities: CITIES_LIST,
  selectedCity: CITIES_LIST[0],
  offers: [],
  currentCityOffers: [],
  activeSorting: SORTING_TYPES.POPULAR,
  reviews,
  activeMapPin: null,
  authorizationStatus: AUTHORIZATION_STATUS.NO_AUTH,
  isDataLoaded: false,
  userName: null,
  room: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: {
      return {
        ...state,
        selectedCity: action.payload,
        currentCityOffers: getCurrentCityOffers(state.offers, action.payload),
        activeSorting: SORTING_TYPES.POPULAR,
      };
    }

    case ActionType.CHANGE_SORTING: {
      return {
        ...state,
        activeSorting: action.payload,
        currentCityOffers: getCurrentCityOffersBySorting(getCurrentCityOffers(state.offers, state.selectedCity), action.payload),
      };
    }

    case ActionType.SET_ACTIVE_MAP_PIN: {
      return {
        ...state,
        activeMapPin: action.payload,
      };
    }

    case ActionType.LOAD_OFFERS: {
      return {
        ...state,
        offers: action.payload,
        currentCityOffers: getCurrentCityOffers(action.payload, state.selectedCity),
        isDataLoaded: true,
      };
    }

    case ActionType.REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }

    case ActionType.SET_USER_NAME: {
      return {
        ...state,
        userName: action.payload,
      };
    }

    case ActionType.IS_LOAD_DATA: {
      return {
        ...state,
        isDataLoaded: action.payload,
      };
    }

    case ActionType.LOAD_ROOM: {
      return {
        ...state,
        room: action.payload,
      };
    }
  }

  return state;
};

export {reducer};
