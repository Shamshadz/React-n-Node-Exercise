import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";

export default function Login() {
  const password = useRef();
  const email = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleForm = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
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
              minLength="5"
              required
              className="loginInput"
            />
            <button className="loginButton">
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forget Password ?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
