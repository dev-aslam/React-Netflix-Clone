import { Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContex";

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/signin" />;
};
