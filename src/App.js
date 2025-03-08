import { useEffect, useState } from "react";
import "./App.css";
// import {
//   fetchMovieNowPlaying,
//   fetchMoviePopular,
//   fetchMovieTopRated,
//   fetchMovieUpcoming,
// } from "./services/tmdbApi";
import Home from "./pages/Home/Home";

function App() {
  // const [dataPopular, setDataPopular] = useState([]);
  // const [dataNowPlaying, setDataNowPlaying] = useState([]);
  // const [dataTopRated, setDataTopRated] = useState([]);
  // const [dataUpcoming, setDataUpcoming] = useState([]);
  // useEffect(() => {
  //   const loadMoviesPopular = async () => {
  //     let moviesListPopular = await fetchMoviePopular();
  //     // console.log(moviesListPopular);

  //     setDataPopular(moviesListPopular.results);
  //   };

  //   const loadMoviesNowPlaying = async () => {
  //     let moviesListNowPlaying = await fetchMovieNowPlaying();
  //     // console.log(moviesListNowPlaying);

  //     setDataNowPlaying(moviesListNowPlaying.results);
  //   };

  //   const loadMoviesTopRated = async () => {
  //     let moviesListTopRated = await fetchMovieTopRated();
  //     // console.log(moviesListTopRated);

  //     setDataTopRated(moviesListTopRated.results);
  //   };

  //   const loadMoviesUpcoming = async () => {
  //     let moviesListUpcoming = await fetchMovieUpcoming();

  //     setDataUpcoming(moviesListUpcoming.results);
  //     // console.log(moviesListUpcoming);
  //   };
  //   loadMoviesPopular();
  //   loadMoviesNowPlaying();
  //   loadMoviesTopRated();
  //   loadMoviesUpcoming();
  // }, []);

  return (
    <div className="appContainer">
      <Home/>
      {/* <div className="popular">
        <h2>films populaires</h2>
        {dataPopular.map((item, key) => (
          <div key={key} className="">
            {item.title}
          </div>
        ))}
      </div>
      <div className="nowPlaying">
        <h2>films récents</h2>
        {dataNowPlaying.map((item, key) => (
          <div key={key} className="">
            {item.title}
          </div>
        ))}
      </div>
      <div className="topRated">
        <h2>films les mieux notés</h2>
        {dataTopRated.map((item, key) => (
          <div key={key} className="">
            {item.title}
          </div>
        ))}
      </div>
      <div className="upcoming">
        <h2>films à venir</h2>
        {dataUpcoming.map((item, key) => (
          <div key={key} className="">
            {item.title}
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
