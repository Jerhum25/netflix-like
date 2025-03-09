import React from "react";
import Categories from "../../components/Categories/Categories";
import MovieInfos from "../../components/MovieInfos/MovieInfos";
import "./Home.scss";

function Home(props) {
  return (
    <div className="homeContainer">
      <MovieInfos />
      <Categories />
    </div>
  );
}

export default Home;
