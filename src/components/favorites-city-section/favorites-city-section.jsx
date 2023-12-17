import React from 'react';
import {OFFERS_TYPES, STRING_TYPES} from '../../prop-types/prop-types';
import FavoritesCard from '../favorites-card/favorites-card';

const FavoritesCitySection = ({city, favoriteCards}) => (
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
          ? <FavoritesCard
            key={card.id}
            card={card}
          />
          : ``
      ))}
    </div>
  </li>
);

FavoritesCitySection.propTypes = {
  city: STRING_TYPES,
  favoriteCards: OFFERS_TYPES,
};

export default FavoritesCitySection;
