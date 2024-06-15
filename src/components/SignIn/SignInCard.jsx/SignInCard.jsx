import { useState } from "react";
import "./SignInCard.css";
import { authenticate } from "../../../Authenticate";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContex";

export function SignInCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setIsLoggedIn } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticate({ email, password })
      .then((user) => {
        console.log(user);
        setIsLoggedIn(true);
        navigate("/home");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  return (
    <div className="signIncard">
      <h1>Sign In</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-items">
          <input
            type="email"
            name="userLoginId"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
          />
          <label htmlFor="email">Email or mobile number</label>
        </div>
        <div className="input-items">
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
          />
          <label htmlFor="password">Password</label>
        </div>

        <button type="submit" className="signIn-btn">
          Sign In
        </button>

        <p>OR</p>

        <button type="button" className="signIn-code-btn">
          Use a sign-in code
        </button>

        <div className="forgotPass">
          <a>Forgot password?</a>
        </div>
      </form>
      <div className="errorMessage"></div>
      <div className="card-footer">
        <div className="card-checkbox">
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <p className="signUpNow">
          New to Netflix? <a href="/">Sign up now</a>.
        </p>
        <div>
          <p className="google-captcha">
            <span>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot.
            </span>
            <button>Learn more.</button>
          </p>
        </div>
      </div>
    </div>
  );
}
