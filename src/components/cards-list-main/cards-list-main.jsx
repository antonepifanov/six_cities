import React from 'react';
import {OFFERS_TYPES} from '../../prop-types/prop-types';
import PlaceCard from '../place-card/place-card';

const CardsListMain = ({placeCards}) => (
  <div className="cities__places-list places__list tabs__content">
    {placeCards.map((card) =>
      <PlaceCard
        className="cities"
        key={card.id}
        card={card}
      />)
    }
  </div>
);

CardsListMain.propTypes = {
  placeCards: OFFERS_TYPES,
};

export default CardsListMain;
