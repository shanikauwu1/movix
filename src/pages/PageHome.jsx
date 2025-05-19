import { useState, useEffect } from "react";
import {
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getPopularMovies,
} from "../utils/api";
import MovieCard from "../components/MovieCard";
import Hero from "../components/Hero";
import Carousel from "react-multi-carousel";
import MovieTabs from "../components/MovieTabs";

function PageHome() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getNowPlayingMovies().then((data) => {
      setNowPlayingMovies(data.results);
    });

    getTopRatedMovies().then((data) => setTopRated(data.results));
    getUpcomingMovies().then((data) => setUpcoming(data.results));

    getPopularMovies()
      .then((data) => {
        setPopular(data.results);
      })
      .catch((error) => console.error("Error fetching popular movies:", error));
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  return (
    <>
      <div className="hero">
        <Hero />
      </div>
      <section className="movie-display">
        <MovieTabs
          nowPlayingMovies={nowPlayingMovies}
          popular={popular}
          topRated={topRated}
          upcoming={upcoming}
          responsive={responsive} // ← add this
        />
      </section>
    </>
  );
}

export default PageHome;
