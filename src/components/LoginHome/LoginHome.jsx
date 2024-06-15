import "./LoginHome.css";
import { Banner } from "./Banner/Banner";
import { MovieRow } from "./MovieRow/MovieRow";

export const LoginHome = () => {
  return (
    <div>
      <Banner />
      <MovieRow genre={"Action"} id={28} />
      <MovieRow genre={"Adventure"} id={12} />
      <MovieRow genre={"Animation"} id={16} />
      <MovieRow genre={"Comedy"} id={35} />
    </div>
  );
};
