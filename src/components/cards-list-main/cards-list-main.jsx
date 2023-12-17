import React from 'react';
import {OFFERS_TYPES, HANDLER_TYPES} from '../../prop-types/prop-types';
import PlaceCard from '../place-card/place-card';

const CardsListMain = (props) => (
  <div className="cities__places-list places__list tabs__content">
    {props.placeCards.map((card) =>
      <PlaceCard
        className="cities"
        key={card.id}
        card={card}
        onMouseEnterHandler={props.onMouseEnterHandler}
        onMouseLeaveHandler={props.onMouseLeaveHandler}
      />)
    }
  </div>
);

CardsListMain.propTypes = {
  placeCards: OFFERS_TYPES,
  onMouseEnterHandler: HANDLER_TYPES,
  onMouseLeaveHandler: HANDLER_TYPES,
};

export default CardsListMain;
