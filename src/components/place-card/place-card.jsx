import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setActivePin, isLoadData, changeFetchStatus} from '../../store/action';
import {Link} from 'react-router-dom';
import {CARD_TYPES, HANDLER_TYPES, STRING_TYPES} from '../../prop-types/prop-types';
import {AUTHORIZATION_STATUS, FETCH_STATUS, STAR_WIDTH} from '../../constants/constants';
import {sendFavoriteStatus} from '../../store/api-actions';
import browserHistory from '../../services/browser-history';

const PlaceCard = ({view, className, card, setActiveMapPin, onLinkClick, authorizationStatus, onFavoriteStatusClick}) => {
  const {id, isFavorite, isPremium, previewImage, price, rating, title, type} = card;
  const onMouseEnter = () => !view && setActiveMapPin(card);
  const onMouseLeave = () => !view && setActiveMapPin(null);
  const handleClick = () => onLinkClick(id);
  const [isFavoriteClass, setIsFavoriteClass] = useState(isFavorite);

  const handleFavoriteClick = () => {
    if (authorizationStatus === AUTHORIZATION_STATUS.NO_AUTH) {
      browserHistory.push(`/login`);
    } else {
      const isFavoriteCard = Number(!isFavorite);
      setIsFavoriteClass(!isFavoriteClass);
      onFavoriteStatusClick(id, isFavoriteCard);
    }
  };

  return (
    <article className={`${className}__place-card place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {!view && isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}
          onClick={handleClick}
        >
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className={`${className}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavoriteClass ? `place-card__bookmark-button--active` : ``}`}
            type="button"
            onClick={handleFavoriteClick}
          >
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
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  card: CARD_TYPES,
  setActiveMapPin: HANDLER_TYPES,
  onLinkClick: HANDLER_TYPES,
  className: STRING_TYPES,
  view: STRING_TYPES,
  authorizationStatus: STRING_TYPES,
  onFavoriteStatusClick: HANDLER_TYPES,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveMapPin(pin) {
    dispatch(setActivePin(pin));
  },
  onLinkClick() {
    dispatch(isLoadData(false));
  },
  onFavoriteStatusClick(id, isFavoriteCard) {
    dispatch(sendFavoriteStatus(id, isFavoriteCard));
    dispatch(changeFetchStatus(FETCH_STATUS.SENDING));
  },
});

export {PlaceCard};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);
