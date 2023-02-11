import "./signup.css";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confPassword = useRef();
  const history = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const useCredential = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    if (password.current.value !== confPassword.current.value) {
      confPassword.current.setCustomValidity("Passwords dont match!");
    } else {
      confPassword.current.setCustomValidity("");
      try {
        await axios.post("/auth/register", useCredential);
        history("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Samsocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Samsocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleForm}>
            <input
              placeholder="Username"
              type="text"
              ref={username}
              required
              className="loginInput"
            />
            <input
              placeholder="Email"
              type="email"
              ref={email}
              required
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
              ref={password}
              minLength="6"
              required
              className="loginInput"
            />
            <input
              placeholder="Confirm Password"
              type="password"
              ref={confPassword}
              minLength="6"
              required
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
