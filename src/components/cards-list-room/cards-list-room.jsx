import React from 'react';
import {OFFERS_TYPES, STRING_TYPES} from '../../prop-types/prop-types';
import PlaceCard from '../place-card/place-card';

const CardsListRoom = ({placeCards, view}) => (
  <div className="near-places__list places__list">
    {placeCards.map((card) =>
      <PlaceCard
        view={view}
        className="near-places"
        key={card.id}
        card={card}
      />)
    }
  </div>
);

CardsListRoom.propTypes = {
  placeCards: OFFERS_TYPES,
  view: STRING_TYPES,
};

export default CardsListRoom;
