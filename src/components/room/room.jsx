import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import CommentForm from '../comment-form/comment-form';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import CardsList from '../cards-list/cards-list';
import {OFFERS_TYPES, REVIEWS_TYPES} from '../../prop-types/prop-types';
import {STAR_WIDTH} from '../../constants/constants';

const Room = ({placeCards, placeReviews}) => {
  const id = Number(useParams().id);
  const room = placeCards.find((card) => card.id === id);
  const {bedrooms, city, images, isFavorite, isPremium, maxAdults, price, rating, title, type, goods, host, description} = room;
  const sentences = description.split(`. `);
  const nearPlaces = placeCards.filter((offer) => offer.city.name === city.name).filter((card) => card.id !== room.id).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((image, index) =>
              <div className="property__image-wrapper" key={image + index}>
                <img className="property__image" src={image} alt="Photo studio"/>
              </div>
            )}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && (
              <div className="property__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`} type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${Math.round(rating) * STAR_WIDTH}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {`${bedrooms} ${bedrooms > 1 ? `bedrooms` : `bedroom`}`}
              </li>
              <li className="property__feature property__feature--adults">
                {`Max ${maxAdults} ${maxAdults > 1 ? `adults` : `adult`}`}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {goods.map((good, index) =>
                  <li className="property__inside-item" key={good + index}>
                    {good}
                  </li>
                )}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper ${host.isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                  <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                {host.isPro && (
                  <span className="property__user-status">
                    Pro
                  </span>
                )}
              </div>
              <div className="property__description">
                {sentences.map((sentence, index) =>
                  <p className="property__text" key={sentence + index}>
                    {sentence}{sentences.length > 1 && index !== sentences.length - 1 ? `.` : ``}
                  </p>
                )}
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{placeReviews.length}</span></h2>
              <ReviewsList placeReviews={placeReviews}/>
              <CommentForm/>
            </section>
          </div>
        </div>
        {nearPlaces.length > 0 && <section className="property__map map">
          <Map
            placeCards={nearPlaces}
            room={room}
          />
        </section>}
      </section>
      {nearPlaces.length > 0 && <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <CardsList
            view="room"
            placeCards={nearPlaces}
          />
        </section>
      </div>}
    </main>
  </div>;
};

Room.propTypes = {
  placeCards: OFFERS_TYPES,
  placeReviews: REVIEWS_TYPES,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  placeCards: state.offers,
  placeReviews: state.reviews
});

export {Room};
export default connect(mapStateToProps)(Room);
