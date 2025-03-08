import React from "react";
import NowPlayingCards from "../NowPlayingCards/NowPlayingCards";
import PopularCards from "../PopularCards/PopularCards";
import TopRatedCards from "../TopRatedCards/TopRatedCards";
import UpcomingCards from "../UpcomingCards/UpcomingCards";
import "./Categories.scss";

function Categories(props) {
  return (
    <div className="categoriesContainer">
      <PopularCards />
      <NowPlayingCards />
      <TopRatedCards />
      <UpcomingCards />
    </div>
  );
}

export default Categories;
