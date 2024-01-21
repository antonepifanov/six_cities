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

export const adaptOfferToClient = (offer) => {
  const {host} = offer;
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        host: {
          avatarUrl: host.avatar_url,
          id: host.id,
          isPro: host.is_pro,
          name: host.name
        },
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        maxAdults: offer.max_adults,
        previewImage: offer.preview_image,
      },
  );

  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

export const adaptOffersToClient = (offers) => {
  return offers.map((offer) => adaptOfferToClient(offer));
};
