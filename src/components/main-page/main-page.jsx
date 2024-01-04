import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {Link} from 'react-router-dom';
import {OFFERS_TYPES, HANDLER_TYPES, CARD_TYPES, STRING_TYPES, CITIES_TYPES} from '../../prop-types/prop-types';
import CardsList from '../cards-list/cards-list';
import Map from "../map/map";
import Cities from '../cities/cities';

const MainPage = ({cities, selectedCity, offers, onMouseEnterHandler, onMouseLeaveHandler, activeItem, selectCity}) => {
  const placeCards = offers.filter((offer) => offer.city.name === selectedCity);

  return (
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
            {placeCards.length > 0 && <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placeCards.length} {placeCards.length === 1 ? `place` : `places`} to stay in {selectedCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <CardsList
                placeCards={placeCards}
                onMouseEnterHandler={onMouseEnterHandler}
                onMouseLeaveHandler={onMouseLeaveHandler}
              />
            </section>}
            <div className="cities__right-section">
              {placeCards.length > 0 && <section className="cities__map map">
                <Map
                  placeCards={placeCards}
                  activeItem={activeItem}
                />
              </section>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: OFFERS_TYPES,
  onMouseEnterHandler: HANDLER_TYPES,
  onMouseLeaveHandler: HANDLER_TYPES,
  activeItem: CARD_TYPES,
  selectedCity: STRING_TYPES,
  selectCity: HANDLER_TYPES,
  cities: CITIES_TYPES
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  selectedCity: state.selectedCity,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  selectCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
