import React from 'react';
import {CITIES_LIST} from '../../constants/constants';

const Cities = () => {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES_LIST.map((city) =>
              <li className="locations__item" key={city}>
                <a className="locations__item-link tabs__item tabs__item--active" href="#">
                  <span>{city}</span>
                </a>
              </li>)
            }
          </ul>
        </section>
      </div>
    </>
  );
};

export default Cities;
