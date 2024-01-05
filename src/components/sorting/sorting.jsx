import React, {useState} from 'react';
import {SORTING_TYPES} from '../../constants/constants';

const Sorting = () => {
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const onClickHandle = () => setIsSortingOpen(!isSortingOpen);

  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by </span>
    <span
      className="places__sorting-type" tabIndex="0"
      onClick={onClickHandle}
    >
      {SORTING_TYPES.POPULAR}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className={`places__options places__options--custom ${isSortingOpen ? `places__options--opened` : ``}`}>
      {Object.values(SORTING_TYPES).map((sortType) => (
        <li
          className="places__option places__option--active"
          tabIndex="0"
          key={sortType}
          onClick={onClickHandle}
        >
          {sortType}
        </li>
      ))}
    </ul>
  </form>;
};

export default Sorting;
