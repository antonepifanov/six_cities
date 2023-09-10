import React, {useState} from 'react';
import {OFFERS_TYPES} from '../../prop-types/prop-types';
import PlaceCard from '../place-card/place-card';

const CardsList = ({placeCards}) => {
  const [, setActiveItem] = useState(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {placeCards.map((card) =>
        <PlaceCard
          key={card.id}
          card={card}
          onMouseEnter={() => setActiveItem(card)}
          onMouseLeave={() => setActiveItem(null)}
        />)
      }
    </div>);
};

CardsList.propTypes = {
  placeCards: OFFERS_TYPES,
};

export default CardsList;
