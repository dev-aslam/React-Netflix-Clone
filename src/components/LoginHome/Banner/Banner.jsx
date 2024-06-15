import { useEffect, useState } from "react";
import axios from "axios";
import { TRENDING_URL, IMAGE_URL } from "../../../Request";
import { LoginNav } from "../LoginNav/LoginNav";
import { MovieDetails } from "../MovieDetails/MovieDetails";
import "./Banner.css";

export const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(TRENDING_URL)
      .then((response) => response.data.results)
      .then((data) => {
        setMovie(data[0]);
        console.log(movie);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? IMAGE_URL + movie.backdrop_path : ""})`,
      }}
      className="banner">
      <LoginNav />
      <MovieDetails movie={movie} />
    </div>
  );
};
