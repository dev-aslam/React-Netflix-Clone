import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./components/SignIn/SignIn";
import { LoginHome } from "./components/LoginHome/LoginHome";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <LoginHome />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
