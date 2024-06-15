import { Header } from "../Header/Header";
import "./HomeBanner.css";
import { SignUp } from "../SignUp/SignUp";

export const HomeBanner = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="homeBanner">
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <SignUp />
      </div>
    </div>
  );
};
