import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Movix Logo" />
      <p>
        <a
          href="https://www.themoviedb.org/movie/top-rated?language=en-CA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
      </p>
      <p>&copy; 2025</p>
    </footer>
  );
}

export default Footer;
