import logo from "../../assets/netflix-logo.svg";
import LanguageBtn from "../Header/LanguageBtn";
import "./Header.css";
import { useLocation, Link } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || false;
  return (
    <div className="header-container">
      <div className="mt-2 ml-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-container" />
        </Link>
      </div>

      {isHome && (
        <div className="flex gap items-center justify-center">
          <LanguageBtn />
          <div className="header-btn-container">
            <Link to="/signin" className="header-btn">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
