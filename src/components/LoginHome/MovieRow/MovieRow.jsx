import { useEffect, useState } from "react";
import "./MovieRow.css";
import axios from "axios";
import { GENRE_URL } from "../../../Request";
import { MovieCard } from "./MovieCard/MovieCard";

export const MovieRow = ({ genre, id }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(GENRE_URL + id)
      .then((response) => response.data.results)
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="movie-row">
      <h1>{genre}</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
