import { Header } from "../Header/Header";
import { SignInCard } from "./SignInCard.jsx/SignInCard";
import "./SignIn.css";

export const SignIn = () => {
  return (
    <div className="signIn-bg">
      <Header />
      <SignInCard />
    </div>
  );
};
