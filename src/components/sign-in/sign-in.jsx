import React, {useRef} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import Header from '../header/header';
import {HANDLER_TYPES, STRING_TYPES} from '../../prop-types/prop-types';
import {AUTHORIZATION_STATUS, BACKEND_URL} from '../../constants/constants';

const SignIn = ({authorizationStatus, onSubmit}) => {
  if (authorizationStatus === AUTHORIZATION_STATUS.AUTH) {
    return <Redirect to="/"/>;
  }
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };
  return <div className="page page--gray page--login">
    <Header/>

    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form"
            action={BACKEND_URL}
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                ref={emailRef}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordRef}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  </div>;
};

SignIn.propTypes = {
  onSubmit: HANDLER_TYPES,
  authorizationStatus: STRING_TYPES,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
