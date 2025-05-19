import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard"; // adjust the path as needed

const MovieTabs = ({
  nowPlayingMovies,
  popular,
  topRated,
  upcoming,
  responsive,
}) => {
  const [activeTab, setActiveTab] = useState("nowPlaying");

  const tabs = [
    { label: "Now Playing", value: "nowPlaying" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "topRated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const getMovies = () => {
    switch (activeTab) {
      case "nowPlaying":
        return nowPlayingMovies;
      case "popular":
        return popular;
      case "topRated":
        return topRated;
      case "upcoming":
        return upcoming;
      default:
        return [];
    }
  };

  return (
    <div className="movie-tabs">
      {/* Tabs */}
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`px-4 py-2 rounded ${
              activeTab === tab.value
                ? "bg-yellow-400 text-black font-semibold"
                : "bg-gray-700 text-white"
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="movies-container">
        {getMovies().map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieTabs;
