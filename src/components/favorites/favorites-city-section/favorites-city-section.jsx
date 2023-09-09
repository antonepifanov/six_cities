import React from 'react';
import PropTypes from 'prop-types';
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
      {favoriteCards.map((card) => {
        return card.city.name === city
          ? <FavoritesCard
            key={card.id}
            card={card}
          />
          : ``;
      })}
    </div>
  </li>
);

FavoritesCitySection.propTypes = {
  city: PropTypes.string.isRequired,
  favoriteCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FavoritesCitySection;
