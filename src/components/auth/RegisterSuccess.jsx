import React from 'react'
import "./registerSuccess.css";
import "./registerSuccess_Adaptive.css"
import register__success from "../../assets/epic_games_logo.png";

const RegisterSuccess = () => {
  return (
    <div className="register__success_container">
        <img className="register__success_logo" src={register__success} alt="" />
        <h6 className="register__success_title">СОЗДАНИЕ УЧЕТНОЙ ЗАПИСИ EPIC GAMES</h6>
        <p className="register__success_p">Пожалуйста, проверьте свою почту и перейдите по ссылке, чтобы активировать свой аккаунт</p>
    </div>
  )
}

export default RegisterSuccess