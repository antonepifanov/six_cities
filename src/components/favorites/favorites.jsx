import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {OFFERS_TYPES} from '../../prop-types/prop-types';
import FavoritesCitySection from '../favorites-city-section/favorites-city-section';

const Favorites = ({placeCards}) => {
  const favoriteCards = placeCards.filter((card) => card.isFavorite);
  const citiesList = favoriteCards.reduce((uniqCitiesList, card) => {
    uniqCitiesList.push(card.city.name);
    return uniqCitiesList;
  }, []);
  const cities = Array.from(new Set(citiesList));

  return (<div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((city) =>
              <FavoritesCitySection
                key={city}
                city={city}
                favoriteCards={favoriteCards}
              />)
            }
          </ul>
        </section>
      </div>
    </main>
    <footer className="footer container">
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </a>
    </footer>
  </div>
  );
};

Favorites.propTypes = {
  placeCards: OFFERS_TYPES,
};

const mapStateToProps = (state) => ({
  placeCards: state.offers,
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
