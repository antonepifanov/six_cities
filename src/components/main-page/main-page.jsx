import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {Link} from 'react-router-dom';
import {OFFERS_TYPES, HANDLER_TYPES, STRING_TYPES, CITIES_TYPES} from '../../prop-types/prop-types';
import CardsList from '../cards-list/cards-list';
import Map from "../map/map";
import Cities from '../cities/cities';
import Sorting from '../sorting/sorting';

const MainPage = ({cities, selectedCity, selectCity, currentCityOffers}) => (
  <div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--index">
      <Cities
        cities={cities}
        selectedCity={selectedCity}
        selectCity={selectCity}
      />
      <div className="cities">
        <div className="cities__places-container container">
          {currentCityOffers.length > 0 && <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentCityOffers.length} {currentCityOffers.length === 1 ? `place` : `places`} to stay in {selectedCity}</b>
            <Sorting/>
            <CardsList
              placeCards={currentCityOffers}
            />
          </section>}
          <div className="cities__right-section">
            {currentCityOffers.length > 0 && <section className="cities__map map">
              <Map placeCards={currentCityOffers}/>
            </section>}
          </div>
        </div>
      </div>
    </main>
  </div>
);

MainPage.propTypes = {
  currentCityOffers: OFFERS_TYPES,
  selectedCity: STRING_TYPES,
  selectCity: HANDLER_TYPES,
  cities: CITIES_TYPES
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  selectedCity: state.selectedCity,
  currentCityOffers: state.currentCityOffers
});

const mapDispatchToProps = (dispatch) => ({
  selectCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
