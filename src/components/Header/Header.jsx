import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header(props) {
  function openConnectForm() {
    const connectForm = document.querySelector(".connectForm");
    connectForm.classList.toggle("visible");
  }
  function onClickLogin(e) {
    const pseudo = localStorage.getItem("pseudo");
    const hello = document.querySelector(".hello");
    const pseudoInput = document.querySelector("#pseudo");
    const passwordInput = document.querySelector("#password");
    const connectForm = document.querySelector(".connectForm");

    if (pseudoInput.value === "" || passwordInput.value === "") {
      alert("Veuillez remplir tous les champs");
    } else if (passwordInput.value.length < 8) {
      alert("Votre mot de passe doit comporter au moins 8 caractères");
    } else {
      hello.innerText = "Bonjour " + pseudo;
      connectForm.classList.toggle("visible");
      pseudoInput.value = "";
      passwordInput.value = "";
    }
  }

  return (
    <div className="headerContainer">
      <Link to="/" className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
          alt="logo netflix"
        />
      </Link>
      <div className="user">
        <p className="hello"></p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="logo user"
          onClick={openConnectForm}
        />
        <div className="connectForm">
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            id="pseudo"
            name="pseudo"
            onChange={(e) => {
              localStorage.setItem("pseudo", e.target.value);
            }}
          />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" />
          <button onClick={onClickLogin}>s'identifier</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
