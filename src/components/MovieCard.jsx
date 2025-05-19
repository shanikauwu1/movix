import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const formatReleaseDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const truncateString = (str, num) => {
    if (str.length <= num) return str;
    return str.slice(0, num) + "...";
  };

  return (
    <div className="movie-card-wrapper">
      <FavoriteButton className="favorite-button" movie={movie} />
      <div className="movie-card-container">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="movie-card-poster"
          onClick={() => navigate(`/movie/${movie.id}`)}
          style={{ cursor: "pointer" }}
        />
        <div className="movie-info">
          <p className="movie-rating">
            {(movie.vote_average * 10).toFixed(0)}%
          </p>
          <p className="movie-title">{movie.title}</p>
          <p className="movie-card-summary">
            {truncateString(movie.overview, 60)}
          </p>
          <p className="movie-details">
            {formatReleaseDate(movie.release_date)}
          </p>
          <button
            className="movie-more-button"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
