import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import CommentForm from '../comment-form/comment-form';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import CardsList from '../cards-list/cards-list';
import {BOOLEAN_TYPES, HANDLER_TYPES, OBJECT_TYPES, OFFERS_TYPES, REVIEWS_TYPES, STRING_TYPES} from '../../prop-types/prop-types';
import {AUTHORIZATION_STATUS, STAR_WIDTH} from '../../constants/constants';
import Header from '../header/header';
import {getRoomData} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import RoomBookmarkButton from '../room-bookmark-button/room-bookmark-button';

const Room = ({authorizationStatus, placeReviews, room, isDataLoaded, onLoadData, nearPlaces}) => {
  const id = Number(useParams().id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [room]);

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData(id);
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  if (!room) {
    return <NotFoundPage/>;
  }

  const {bedrooms, images, isFavorite, isPremium, maxAdults, price, rating, title, type, goods, host, description} = room;
  const sentences = description.split(`. `);

  return <div className="page">
    <Header/>

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
              <RoomBookmarkButton id={id} isFavorite={isFavorite}/>
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
              {authorizationStatus === AUTHORIZATION_STATUS.AUTH && <CommentForm/>}
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
  placeReviews: REVIEWS_TYPES,
  room: OBJECT_TYPES,
  isDataLoaded: BOOLEAN_TYPES,
  onLoadData: HANDLER_TYPES,
  authorizationStatus: STRING_TYPES,
  nearPlaces: OFFERS_TYPES,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  placeCards: state.offers,
  placeReviews: state.reviews,
  room: state.room,
  nearPlaces: state.nearPlaces,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData(id) {
    dispatch(getRoomData(id));
  },
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
