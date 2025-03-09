import React, { useEffect, useState } from "react";
import { fetchMovieTopRated } from "../../services/tmdbApi";
import MovieCard from "../MovieCard/MovieCard";
import "./TopRatedCards.scss";

function TopRatedCards(props) {
  const [dataTopRated, setDataTopRated] = useState([]);
  useEffect(() => {
    const loadMoviesTopRated = async () => {
      let moviesListTopRated = await fetchMovieTopRated();
      // console.log(moviesListTopRated);

      setDataTopRated(moviesListTopRated.results);
    };

    loadMoviesTopRated();
  }, []);

  return (
    <div className="topRatedCardsContainer">
      <h2>films les mieux notés</h2>
      <div className="cards">
        {dataTopRated.map((item, key) => (
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

export default TopRatedCards;
