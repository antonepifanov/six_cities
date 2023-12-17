import React from 'react';
import {OFFERS_TYPES, STRING_TYPES} from '../../prop-types/prop-types';
import CardsListMain from '../cards-list-main/cards-list-main';
import CardsListRoom from '../cards-list-room/cards-list-room';

const CardsList = ({view, ...restProps}) => {
  const getComponentByType = () => {
    switch (view) {
      case `room`:
        return <CardsListRoom
          view={view}
          {...restProps}
        />;
      default:
        return <CardsListMain {...restProps}/>;
    }
  };

  return getComponentByType();
};

CardsList.propTypes = {
  placeCards: OFFERS_TYPES,
  view: STRING_TYPES,
};

export default CardsList;
