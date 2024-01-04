import React from 'react';
import {OFFERS_TYPES, STRING_TYPES, HANDLER_TYPES} from '../../prop-types/prop-types';
import PlaceCard from '../place-card/place-card';

const FavoritesCitySection = ({city, favoriteCards, onMouseEnterHandler, onMouseLeaveHandler}) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{city}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {favoriteCards.map((card) => (
        card.city.name === city
          ? <PlaceCard
            className="favorites"
            key={card.id}
            card={card}
            onMouseEnterHandler={onMouseEnterHandler}
            onMouseLeaveHandler={onMouseLeaveHandler}
          />
          : ``
      ))}
    </div>
  </li>
);

FavoritesCitySection.propTypes = {
  city: STRING_TYPES,
  favoriteCards: OFFERS_TYPES,
  onMouseEnterHandler: HANDLER_TYPES,
  onMouseLeaveHandler: HANDLER_TYPES,
};

export default FavoritesCitySection;
