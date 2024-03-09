import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {OFFERS_TYPES} from '../../prop-types/prop-types';
import FavoritesCitySection from '../favorites-city-section/favorites-city-section';
import Header from '../header/header';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

const Favorites = ({placeCards}) => {
  const favoriteCards = placeCards.filter((card) => card.isFavorite);
  const citiesList = favoriteCards.reduce((uniqCitiesList, card) => {
    uniqCitiesList.push(card.city.name);
    return uniqCitiesList;
  }, []);
  const cities = Array.from(new Set(citiesList));

  return <div className="page">
    <Header/>

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {favoriteCards.length === 0
          ? <FavoritesEmpty />
          : <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) =>
                <FavoritesCitySection
                  key={city}
                  city={city}
                  favoriteCards={favoriteCards}
                />)}
            </ul>
          </section>
        }
      </div>
    </main>
    <footer className="footer container">
      <Link className="footer__logo-link" to="/">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </Link>
    </footer>
  </div>;
};

Favorites.propTypes = {
  placeCards: OFFERS_TYPES,
};

const mapStateToProps = (state) => ({
  placeCards: state.offers,
});

export {Favorites};
export default connect(mapStateToProps)(Favorites);
