import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="headerContainer">
      <Link to="/" className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
          alt="logo netflix"
        />
      </Link>
      <div className="user">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="logo user"
        />
      </div>
    </div>
  );
}

export default Header;
