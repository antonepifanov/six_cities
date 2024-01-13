import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AUTHORIZATION_STATUS} from '../../constants/constants';
import {BOOLEAN_TYPES, HANDLER_TYPES, STRING_TYPES} from '../../prop-types/prop-types';


const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AUTHORIZATION_STATUS.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: STRING_TYPES,
  exact: BOOLEAN_TYPES,
  path: STRING_TYPES,
  render: HANDLER_TYPES,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
