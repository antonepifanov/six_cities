import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {CARD_TYPES} from '../../prop-types/prop-types';

const STAR_WIDTH = 20;

const PlaceCard = ({card, onMouseEnter, onMouseLeave}) => {
  const {id, isFavorite, isPremium, previewImage, price, rating, title, type} = card;
  const handleMouseEnter = () => onMouseEnter();
  const handleMouseLeave = () => onMouseLeave(null);

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * STAR_WIDTH}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  card: CARD_TYPES,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default PlaceCard;
