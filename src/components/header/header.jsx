import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import HeaderLink from '../header-link/header-link';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {HANDLER_TYPES} from '../../prop-types/prop-types';

const Header = ({onLinkClick}) => {
  const currentLocation = useLocation().pathname;
  const clickHandler = () => onLinkClick();
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className={currentLocation === `/` ? `header__logo-link header__logo-link--active` : `header__logo-link`}
              to="/"
              onClick={clickHandler}
            >
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

Header.propTypes = {
  onLinkClick: HANDLER_TYPES,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  placeCards: state.offers,
  placeReviews: state.reviews,
  room: state.room,
});

const mapDispatchToProps = (dispatch) => ({
  onLinkClick() {
    dispatch(ActionCreator.isLoadData(false));
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
