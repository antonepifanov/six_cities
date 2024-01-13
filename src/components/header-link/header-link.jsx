import React from 'react';
import {Link} from 'react-router-dom';
import {AUTHORIZATION_STATUS} from '../../constants/constants';
import {STRING_TYPES} from '../../prop-types/prop-types';
import {connect} from 'react-redux';

const HeaderLink = ({authorizationStatus, userName}) => (
  <Link
    className="header__nav-link header__nav-link--profile"
    to={authorizationStatus === AUTHORIZATION_STATUS.AUTH ? `/favorites` : `/login`}
  >
    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
    {authorizationStatus === AUTHORIZATION_STATUS.AUTH
      ? <span className="header__user-name user__name">{userName}</span>
      : <span className="header__login">Sign in</span>}
  </Link>
);

HeaderLink.propTypes = {
  authorizationStatus: STRING_TYPES,
  userName: STRING_TYPES,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userName: state.userName,
});

export {HeaderLink};
export default connect(mapStateToProps)(HeaderLink);
