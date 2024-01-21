import React from 'react';
import {OFFERS_TYPES, STRING_TYPES, BOOLEAN_TYPES} from '../../prop-types/prop-types';
import {connect} from 'react-redux';
import CardsList from '../cards-list/cards-list';
import Map from "../map/map";
import Sorting from '../sorting/sorting';
import LoadingScreen from '../loading-screen/loading-screen';

const CitiesContent = ({selectedCity, currentCityOffers, isDataLoaded}) => {
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return <>
    {currentCityOffers.length > 0 && <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentCityOffers.length} {currentCityOffers.length === 1 ? `place` : `places`} to stay in {selectedCity}</b>
        <Sorting/>
        <CardsList
          placeCards={currentCityOffers}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map placeCards={currentCityOffers}/>
        </section>
      </div>
    </>}
  </>;
};

CitiesContent.propTypes = {
  currentCityOffers: OFFERS_TYPES,
  selectedCity: STRING_TYPES,
  isDataLoaded: BOOLEAN_TYPES,
};

const mapStateToProps = (state) => ({
  selectedCity: state.selectedCity,
  currentCityOffers: state.currentCityOffers,
  isDataLoaded: state.isDataLoaded,
});

export {CitiesContent};
export default connect(mapStateToProps)(CitiesContent);
