import PropTypes from 'prop-types';

export const CARD_TYPES = PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  maxAdults: PropTypes.number,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

export const OFFERS_TYPES = PropTypes.arrayOf(PropTypes.object).isRequired;

export const REVIEWS_TYPES = PropTypes.arrayOf(PropTypes.object).isRequired;

export const HANDLER_TYPES = PropTypes.func.isRequired;

export const STRING_TYPES = PropTypes.string;

export const CITIES_TYPES = PropTypes.arrayOf(STRING_TYPES);

export const BOOLEAN_TYPES = PropTypes.bool.isRequired;

export const REVIEW_TYPES = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
});
