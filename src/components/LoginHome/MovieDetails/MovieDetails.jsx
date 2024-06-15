import "./MovieDetails.css";

export const MovieDetails = ({ movie }) => {
  return (
    <div className="movieDetails">
      <h1>Watch {movie ? movie.title : ""}</h1>
      <p> {movie ? movie.overview : ""}</p>
      <button>Play</button>
    </div>
  );
};
