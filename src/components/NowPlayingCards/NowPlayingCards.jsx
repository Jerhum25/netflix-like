import React, { useEffect, useState } from "react";
import { fetchMovieNowPlaying } from "../../services/tmdbApi";
import MovieCard from "../MovieCard/MovieCard";
import "./NowPlayingCards.scss";

function NowPlayingCards(props) {
  const [dataNowPlaying, setDataNowPlaying] = useState([]);

  useEffect(() => {
    const loadMoviesNowPlaying = async () => {
      let moviesListNowPlaying = await fetchMovieNowPlaying();

      setDataNowPlaying(moviesListNowPlaying.results);
    };

    loadMoviesNowPlaying();
  }, []);

  return (
    <div className="nowPlayingCardsContainer">
      <h2>films récents</h2>
      <div className="cards">
        {dataNowPlaying.map((item, key) => (
          <MovieCard
            /* title={item.title} */ key={key}
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            onClick={(e) => {
              localStorage.setItem("title", item.title);
              localStorage.setItem(
                "releaseDate",
                new Date(item.release_date).getFullYear()
              );
              localStorage.setItem("overview", item.overview);
              localStorage.setItem(
                "image",
                `https://image.tmdb.org/t/p/original${item.backdrop_path}`
              );
            }}

          />
        ))}
      </div>
    </div>
  );
}

export default NowPlayingCards;
