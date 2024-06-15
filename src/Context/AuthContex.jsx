import { useContext, useState, createContext } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["isLogin"]);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const isLogined = cookies.isLogin;
    return isLogined ? true : false;
  });

  const setIsLoggedInFunc = (value) => {
    setIsLoggedIn(value);
    if (value) {
      setCookie("isLogin", value);
    } else {
      removeCookie("isLogin");
    }
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn: setIsLoggedInFunc,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
