import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import HeaderLink from '../header-link/header-link';

const Header = () => {
  const currentLocation = useLocation().pathname;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className={currentLocation === `/` ? `header__logo-link header__logo-link--active` : `header__logo-link`} to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <HeaderLink/>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
