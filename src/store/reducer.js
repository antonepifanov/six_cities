import {CITIES_LIST, SORTING_TYPES, AUTHORIZATION_STATUS, FETCH_STATUS} from '../constants/constants';
import {ActionType} from './action';
import {getCurrentCityOffers, getCurrentCityOffersBySorting} from './selectors';

const newCardList = (stateCards, currentCard) => {
  const cardIndex = stateCards.findIndex((card) => card.id === currentCard.id);
  if (cardIndex === -1) {
    return stateCards;
  }
  return [...stateCards.slice(0, cardIndex), currentCard, ...stateCards.slice(cardIndex + 1)];
};

const initialState = {
  offers: [],
  cities: CITIES_LIST,
  selectedCity: CITIES_LIST[0],
  reviews: [],
  currentCityOffers: [],
  activeSorting: SORTING_TYPES.POPULAR,
  comments: [],
  activeMapPin: null,
  authorizationStatus: AUTHORIZATION_STATUS.NO_AUTH,
  isDataLoaded: false,
  userName: null,
  room: null,
  fetchStatus: FETCH_STATUS.PENDING,
  nearPlaces: [],
  favorites: [],
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

    case ActionType.LOAD_FAVORITES: {
      return {
        ...state,
        favorites: action.payload,
        isDataLoaded: true,
      };
    }

    case ActionType.CHANGE_FAVORITE_STATUS: {
      return {
        ...state,
        offers: newCardList(state.offers, action.payload),
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

    case ActionType.GET_CURRENT_ROOM: {
      return {
        ...state,
        room: action.payload,
      };
    }

    case ActionType.CHANGE_FETCH_STATUS: {
      return {
        ...state,
        fetchStatus: action.payload,
      };
    }

    case ActionType.LOAD_REVIEWS: {
      return {
        ...state,
        reviews: action.payload,
      };
    }

    case ActionType.GET_NEAR_PLACES: {
      return {
        ...state,
        nearPlaces: action.payload,
      };
    }
  }

  return state;
};

export {reducer};
