import React, { useEffect, useState } from "react";
import { fetchMovieUpcoming } from "../../services/tmdbApi";
import MovieCard from "../MovieCard/MovieCard";
import "./UpcomingCards.scss";

function UpcomingCards(props) {
  const [dataUpcoming, setDataUpcoming] = useState([]);

  useEffect(() => {
    const loadMoviesUpcoming = async () => {
      let moviesListUpcoming = await fetchMovieUpcoming();

      setDataUpcoming(moviesListUpcoming.results);
    };
    loadMoviesUpcoming();
  }, []);

  return (
    <div className="upcomingCardsContainer">
      <h2>films à venir</h2>
      <div className="cards">
        {dataUpcoming.map((item, key) => (
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

export default UpcomingCards;
