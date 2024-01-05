export const getCurrentCityOffers = (offers, city) => offers.filter((offer) => offer.city.name === city);
