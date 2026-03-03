import {SORTING_TYPES} from "../constants/constants";

export const getCurrentCityOffers = (offers, city) => offers.filter((offer) => offer.city.name === city);

export const getCurrentCityOffersBySorting = (currentCityOffers, sorting) => {
  switch (sorting) {
    case SORTING_TYPES.POPULAR: {
      return currentCityOffers;
    }
    case SORTING_TYPES.PRICE_HIGH_TO_LOW: {
      return currentCityOffers.slice().sort((a, b) => a.price - b.price).reverse();
    }
    case SORTING_TYPES.PRICE_LOW_TO_HIGH: {
      return currentCityOffers.slice().sort((a, b) => a.price - b.price);
    }
    case SORTING_TYPES.TOP_RATED_FIRST: {
      return currentCityOffers.slice().sort((a, b) => a.rating - b.rating).reverse();
    }
    default: {
      return currentCityOffers;
    }
  }
};

export const newOffersList = (offers, currentCard) => {
  const cardIndex = offers.findIndex((card) => card.id === currentCard.id);
  if (cardIndex === -1) {
    return offers;
  }

  return [...offers.slice(0, cardIndex), currentCard, ...offers.slice(cardIndex + 1)];
};
