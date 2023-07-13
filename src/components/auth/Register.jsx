import React from "react";
import "./Register.css";
import auth__logo from "../../assets/epic_games_logo.png";
import { InputGroup } from "react-bootstrap";

const Register = () => {
  return (
    <div className="container__auth">
      <div className="register">
        <img className="register__logo" src={auth__logo} alt="" />
        <h6 className="register__title">Зарегистрироваться</h6>
        <div className="register__inputs">
          <div className="register__name">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
          </div>
          <div className="register__userName">
            <input type="text" placeholder="Отображаемое имя" />
          </div>
          <div className="register__emailPassword">
            <input type="text" placeholder="Адрес электронной почты" />
            <input type="text" placeholder="Пароль" />
          </div>

          <div className="register__btn">
            <button className="register__button">Продолжить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
