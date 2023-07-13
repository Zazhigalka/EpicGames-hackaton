import React from "react";
import "./Auth.css";
import auth__logo from "../../assets/epic_games_logo.png";
import { InputGroup } from "react-bootstrap";

const Auth = () => {
  return (
    <div className="auth">
      <img className="auth__logo" src={auth__logo} alt="" />
      <h6 className="auth__title">ВОЙТИ В УЧЕТНУЮ ЗАПИСЬ</h6>
      <div className="auth__inputs">
        <div className="auth__emailPassword">
          <input type="text" placeholder="Адрес электронной почты" />
          <input type="text" placeholder="Пароль" />
        </div>

        <div className="auth__btn">
          <button className="auth__button">ВОЙТИ ПРЯМО СЕЙЧАС</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
