import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/register/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import {useContext} from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={user ? <Home/> : <Signup/>} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/profile/:username" element={<Profile/>} />
        <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
