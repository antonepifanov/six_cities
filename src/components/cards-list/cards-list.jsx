import React from 'react';
import {OFFERS_TYPES, HANDLER_TYPES} from '../../prop-types/prop-types';
import PlaceCard from '../place-card/place-card';

const CardsList = ({placeCards, onMouseEnter, onMouseLeave}) => (
  <div className="cities__places-list places__list tabs__content">
    {placeCards.map((card) =>
      <PlaceCard
        key={card.id}
        card={card}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />)
    }
  </div>
);

CardsList.propTypes = {
  placeCards: OFFERS_TYPES,
  onMouseEnter: HANDLER_TYPES,
  onMouseLeave: HANDLER_TYPES,
};

export default CardsList;
