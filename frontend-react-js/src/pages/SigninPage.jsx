import "./SigninPage.css";
import React from "react";
import Logo from "../components/svg/logo.svg?react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";

// [TODO] Authenication
//import Cookies from 'js-cookie'

export default function SigninPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState("");

  const onsubmit = async (event) => {
    event.preventDefault();
    setErrors("");

    try {
      const user = await Auth.signIn(email, password);
      console.log("user", user);

      if (user.signInUserSession) {
        const token = user.signInUserSession.accessToken.jwtToken;

        localStorage.setItem("access_token", token);
        window.location.href = "/";
      } else {
        console.log("Authentication not completed yet");
      }
    } catch (error) {
      if (error.code === "UserNotConfirmedException") {
        window.location.href = "/confirm";
      }

      setErrors(error.message);
    }
  };

  const email_onchange = (event) => {
    setEmail(event.target.value);
  };
  const password_onchange = (event) => {
    setPassword(event.target.value);
  };

  let el_errors;
  if (errors) {
    el_errors = <div className="errors">{errors}</div>;
  }

  return (
    <article className="signin-article">
      <div className="signin-info">
        <Logo className="logo" />
      </div>
      <div className="signin-wrapper">
        <form className="signin_form" onSubmit={onsubmit}>
          <h2>Sign into your Cruddur account</h2>
          <div className="fields">
            <div className="field text_field username">
              <label>Email</label>
              <input type="text" value={email} onChange={email_onchange} />
            </div>
            <div className="field text_field password">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={password_onchange}
              />
            </div>
          </div>
          {el_errors}
          <div className="submit">
            <Link to="/forgot" className="forgot-link">
              Forgot Password?
            </Link>
            <button type="submit">Sign In</button>
          </div>
        </form>
        <div className="dont-have-an-account">
          <span>Don't have an account?</span>
          <Link to="/signup">Sign up!</Link>
        </div>
      </div>
    </article>
  );
}
