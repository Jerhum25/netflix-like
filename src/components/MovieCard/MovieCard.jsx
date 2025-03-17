import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

function MovieCard({ title, src, date, overview, onClick, voteAverage }) {
  return (
    <Link to="/movieDetails" className="movieCardContainer" onClick={onClick}>
      <img src={src} alt={title} />
      <h4>{title}</h4>
      <p>{date}</p>
      <p>{overview}</p>
      <p>{voteAverage}</p>
    </Link>
  );
}

export default MovieCard;
