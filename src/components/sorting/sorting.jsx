import React, {useState, useEffect} from 'react';
import {SORTING_TYPES} from '../../constants/constants';
import {STRING_TYPES, HANDLER_TYPES} from '../../prop-types/prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const Sorting = ({selectedCity, activeSorting, changeSorting}) => {
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const onSortingClickHandle = () => setIsSortingOpen(!isSortingOpen);
  const onSortingTypeClickHandle = (sortType) => {
    onSortingClickHandle();
    changeSorting(sortType);
  };

  useEffect(() => {
    return () => {
      setIsSortingOpen(false);
    };
  }, [selectedCity]);

  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by </span>
    <span
      className="places__sorting-type" tabIndex="0"
      onClick={onSortingClickHandle}
    >
      {activeSorting}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className={`places__options places__options--custom ${isSortingOpen ? `places__options--opened` : ``}`}>
      {Object.values(SORTING_TYPES).map((sortType) => (
        <li
          className={`places__option ${activeSorting === sortType ? `places__option--active` : ``}`}
          tabIndex="0"
          key={sortType}
          onClick={() => onSortingTypeClickHandle(sortType)}
        >
          {sortType}
        </li>
      ))}
    </ul>
  </form>;
};

Sorting.propTypes = {
  activeSorting: STRING_TYPES,
  changeSorting: HANDLER_TYPES,
  selectedCity: STRING_TYPES,
};

const mapStateToProps = (state) => ({
  activeSorting: state.activeSorting,
  selectedCity: state.selectedCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeSorting(sorting) {
    dispatch(ActionCreator.changeSorting(sorting));
  },
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
