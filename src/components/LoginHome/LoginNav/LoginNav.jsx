import logo from "../../../assets/netflix-logo.svg";
import "./LoginNav.css";
import { useAuth } from "../../../Context/AuthContex";
import { useNavigate, Link } from "react-router-dom";

export const LoginNav = () => {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="left-nav">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-container" />
        </Link>
        <ul>
          <li>Movies</li>
          <li>Series</li>
        </ul>
      </div>
      <div className="right-nav">
        <button className="signout-btn" onClick={handleLogout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};
