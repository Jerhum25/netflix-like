import React, { useEffect, useState } from "react";
import { fetchMoviePopular } from "../../services/tmdbApi";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularCards.scss";

function PopularCards(props) {
  const [dataPopular, setDataPopular] = useState([]);
  useEffect(() => {
    const loadMoviesPopular = async () => {
      let moviesListPopular = await fetchMoviePopular();

      setDataPopular(moviesListPopular.results);
    };

    loadMoviesPopular();
  }, []);

  return (
    <div className="popularCardsContainer">
      <h2>films populaires</h2>
      <div className="cards">
        {dataPopular.map((item, key) => (
          <MovieCard
            // title={item.title}
            key={key}
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            onClick={(e) => {
              localStorage.setItem("title", item.title);
              localStorage.setItem(
                "releaseDate",
                new Date(item.release_date).getFullYear()
              );
              localStorage.setItem("overview", item.overview);
              localStorage.setItem("voteAverage", (item.vote_average).toFixed(1));
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

export default PopularCards;
