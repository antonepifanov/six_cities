import React from 'react';
import {HANDLER_TYPES, STRING_TYPES, CITIES_TYPES} from '../../prop-types/prop-types';

const Cities = ({cities, selectedCity, selectCity}) => {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) =>
              <li className="locations__item" key={city}>
                <a className={`locations__item-link tabs__item ${selectedCity === city ? `tabs__item--active` : ``}`}
                  href="#"
                  onClick={(evt) => {
                    evt.preventDefault();
                    selectCity(city);
                  }}
                >
                  <span>{city}</span>
                </a>
              </li>
            )}
          </ul>
        </section>
      </div>
    </>
  );
};

Cities.propTypes = {
  selectedCity: STRING_TYPES,
  selectCity: HANDLER_TYPES,
  cities: CITIES_TYPES
};

export default Cities;
