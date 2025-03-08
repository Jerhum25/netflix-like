import { FaPlay, FaPlus } from 'react-icons/fa';
import './MovieInfos.scss';
import React, { useEffect, useState } from 'react';
import { fetchMoviePopular } from "../../services/tmdbApi";

function MovieInfos(props) {
      const [dataPopular, setDataPopular] = useState([]);
      useEffect(() => {
        const loadMoviesPopular = async () => {
          let moviesListPopular = await fetchMoviePopular();
          
          setDataPopular(moviesListPopular.results[(Math.random()*19).toFixed()])
        };
    
        loadMoviesPopular();
      }, []);
    
   return (
      <div className="movieInfos">
        <div className="description">
          <h2>{dataPopular.title}</h2>
          <h3 className="date">
            {new Date(dataPopular.release_date).getFullYear()}{" "}
          </h3>
          <p className="overview">{dataPopular.overview}</p>
          <div className="buttons">
            <button>
              <FaPlay /> <p>regarder</p>
            </button>
            <button>
              <FaPlus />
              <p>ajouter à ma liste</p>
            </button>
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original${dataPopular.backdrop_path}`}
          alt={""}
        />
      </div>
   );
}

export default MovieInfos;