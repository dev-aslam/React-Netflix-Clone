import "./MovieCard.css";
import { IMAGE_URL } from "../../../../Request";

export const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-image-container">
        <img
          src={`${IMAGE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          className="movie-image"
        />
      </div>
      <h3 className="movie-title">{movie.title}</h3>
    </div>
  );
};
