import React from 'react';
import {OFFERS_TYPES, HANDLER_TYPES, STRING_TYPES} from '../../prop-types/prop-types';
import PlaceCard from '../place-card/place-card';

const CardsListRoom = (props) => (
  <div className="near-places__list places__list">
    {props.placeCards.map((card) =>
      <PlaceCard
        view={props.view}
        className="near-places"
        key={card.id}
        card={card}
        onMouseEnterHandler={props.onMouseEnterHandler}
        onMouseLeaveHandler={props.onMouseLeaveHandler}
      />)
    }
  </div>
);

CardsListRoom.propTypes = {
  placeCards: OFFERS_TYPES,
  onMouseEnterHandler: HANDLER_TYPES,
  onMouseLeaveHandler: HANDLER_TYPES,
  view: STRING_TYPES,
};

export default CardsListRoom;
