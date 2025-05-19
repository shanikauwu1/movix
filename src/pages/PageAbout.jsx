import logo from "../assets/logo.png";
import img from "../assets/tmdb-logo.svg";

function PageAbout() {
  return (
    <div className="about-wrapper">
      <img src={logo} alt="Filmzone logo" />
      <p>
        Welcome to Movix , we're passionate about bringing the magic of cinema
        to life. Whether you're a casual viewer or a dedicated cinephile, our
        comprehensive database is designed to enhance your movie-watching
        experience.
      </p>
      <div className="tmdb-container">
        <img src={img} alt="TMDB Logo Attribution" className="tmdb" />
        <p>
          This website uses the TMDB API but is not endorsed or certified by
          TMDB
        </p>
      </div>
    </div>
  );
}

export default PageAbout;
