import React from "react";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import MovieInfos from "../../components/MovieInfos/MovieInfos";
import "./Home.scss";

function Home(props) {
  return (
    <div className="homeContainer">
      <Header />
      <MovieInfos />
      <Categories />
    </div>
  );
}

export default Home;
