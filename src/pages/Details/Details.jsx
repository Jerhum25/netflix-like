import React, { useEffect } from "react";
import { FaPlay, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Details.scss";
import { BsStar } from "react-icons/bs";

function Details(props) {
  const movieDetails = {
    title: localStorage.getItem("title"),
    releaseDate: localStorage.getItem("releaseDate"),
    overview: localStorage.getItem("overview"),
    backdropPath: localStorage.getItem("image"),
    voteAverage: localStorage.getItem("voteAverage"),
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // localStorage.clear()
  }, []);

  return (
    <div className="detailsContainer">
      <div className="description">
        <h2>{movieDetails.title}</h2>
        <h3 className="date">{movieDetails.releaseDate}   <span className="average"><BsStar/> {movieDetails.voteAverage}</span></h3>
        <p className="overview">{movieDetails.overview}</p>
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
      <img src={movieDetails.backdropPath} alt={movieDetails.title} />
      <Link to="/" className="backButton1">
        retour
      </Link>
      <Link to="/" className="backButton2">
        retour
      </Link>
    </div>
  );
}

export default Details;
