import React, { useEffect, useState } from "react";
import "./PopularCards.scss";
import { fetchMoviePopular } from "../../services/tmdbApi";
import MovieCard from "../MovieCard/MovieCard";

function PopularCards(props) {
  const [dataPopular, setDataPopular] = useState([]);
  useEffect(() => {
    const loadMoviesPopular = async () => {
      let moviesListPopular = await fetchMoviePopular();
      
      setDataPopular(moviesListPopular.results);
   };
   
   loadMoviesPopular();
   // console.log(dataPopular);
  }, []);

  return <div className="popularCardsContainer">
       <h2>films populaires</h2>
    <div className="cards">
       {dataPopular.map((item, key) => (
            <MovieCard /* title={item.title} */ key={key} src={`https://image.tmdb.org/t/p/original${item.poster_path}`}/>
         ))}
    </div>

  </div>;
}

export default PopularCards;
