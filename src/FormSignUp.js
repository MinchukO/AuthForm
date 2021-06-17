import React from "react";
import classNames from 'classnames';

import useForm from './useForm';
import validate from "./validateInfo";


const FormSignUp = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm, validate
  );

  return (
    <div>
      <div className="wrapperForm">
        <h2 className="wrapperForm__title">Log in</h2>
        <p className="wrapperForm__sub-title">
          <span className="wrapperForm-text">Don’t have an account?</span>
          &nbsp;
          <a className="wrapperForm-link" href="/">
            Sign up
          </a>
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <button className="button form-btn form-btn-google" type="button">
            Continue with Google
          </button>
          <button className="button form-btn form-btn-microsoft" type="button">
            Continue with Microsoft
          </button>
          <p className="form__separator">or</p>
          <input
            className={classNames("form-input form-input--email", {
              error: errors.email,
              success: !errors.email,
            })}
            type="email"
            placeholder="Email"
            autoComplete="off"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="form__error-info">{errors.email}</p>}
          <input
            className={classNames("form-input form-input--password", {
              error: errors.password,
              success: !errors.password,
            })}
            type="password"
            placeholder="Password"
            autoComplete="off"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="form__error-info">{errors.password}</p>
          )}
          <a className="form-link" href="/">
            Forgot password?
          </a>
          <label className="form-text">
            Remember me
            <input
              className="form-remember"
              type="checkbox"
              name="remember"
              checked={values.remember}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
          </label>
          <button className="form-submit" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSignUp
