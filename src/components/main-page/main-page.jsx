import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {HANDLER_TYPES, STRING_TYPES, CITIES_TYPES, BOOLEAN_TYPES} from '../../prop-types/prop-types';
import Cities from '../cities/cities';
import CitiesContent from '../cities-content/cities-content';
import Header from '../header/header';
import {fetchOffers} from '../../store/api-actions';

const MainPage = ({cities, selectedCity, selectCity, isDataLoaded, onLoadData}) => {
  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  return <div className="page page--gray page--main">
    <Header/>

    <main className="page__main page__main--index">
      <Cities
        cities={cities}
        selectedCity={selectedCity}
        selectCity={selectCity}
      />
      <div className="cities">
        <div className="cities__places-container container">
          <CitiesContent/>
        </div>
      </div>
    </main>
  </div>;
};

MainPage.propTypes = {
  selectedCity: STRING_TYPES,
  selectCity: HANDLER_TYPES,
  cities: CITIES_TYPES,
  isDataLoaded: BOOLEAN_TYPES,
  onLoadData: HANDLER_TYPES,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  selectedCity: state.selectedCity,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  selectCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  onLoadData() {
    dispatch(fetchOffers());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
