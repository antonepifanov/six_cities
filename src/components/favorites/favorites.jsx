import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {HANDLER_TYPES, OFFERS_TYPES, STRING_TYPES} from '../../prop-types/prop-types';
import FavoritesCitySection from '../favorites-city-section/favorites-city-section';
import Header from '../header/header';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {FETCH_STATUS} from '../../constants/constants';
import {getFavorites} from '../../store/api-actions';

const Favorites = ({favorites, onLoadData, fetchStatus}) => {
  const citiesList = favorites.reduce((uniqCitiesList, card) => {
    uniqCitiesList.push(card.city.name);
    return uniqCitiesList;
  }, []);
  const cities = Array.from(new Set(citiesList));

  useEffect(() => {
    if (fetchStatus !== FETCH_STATUS.DONE) {
      onLoadData();
    }
  }, [fetchStatus]);

  return <div className="page">
    <Header/>

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {favorites.length === 0
          ? <FavoritesEmpty />
          : <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) =>
                <FavoritesCitySection
                  key={city}
                  city={city}
                  favoriteCards={favorites}
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
  favorites: OFFERS_TYPES,
  onLoadData: HANDLER_TYPES,
  fetchStatus: STRING_TYPES,
};

const mapStateToProps = (state) => ({
  favorites: state.favorites,
  fetchStatus: state.fetchStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(getFavorites());
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
