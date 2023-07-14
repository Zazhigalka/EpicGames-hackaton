import React, { useState } from "react";
import "./Register.css";
import auth__logo from "../../assets/epic_games_logo.png";
import { Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContextProvider";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [isSeller, setIsSeller] = useState(false);

  const { handleRegister, handleRegisterSeller } = useAuth();

  function handleSave() {
    if (
      !email.trim() ||
      !name.trim() ||
      !lastName.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      alert("Заполните поля!");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password2", passwordConfirm);
    formData.append("first_name", name);
    formData.append("last_name", lastName);
    formData.append("username", userName);

    if (isSeller) {
      handleRegisterSeller(formData);
    } else {
      handleRegister(formData);
    }
  }

  return (
    <div className="container__auth">
      <div className="register">
        <img className="register__logo" src={auth__logo} alt="" />
        <h6 className="register__title">Зарегистрироваться</h6>
        <div className="register__inputs">
          <div className="register__name">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Имя"
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Фамилия"
            />
          </div>
          <div className="register__userName">
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Отображаемое имя"
            />
          </div>
          <div className="register__emailPassword">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Адрес электронной почты"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Пароль"
            />
            <input
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
              placeholder=" Подтвердите пароль"
            />
          </div>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Вы продавец?"
            className="register__isSeller"
            onChange={(e) => setIsSeller(e.target.checked)}
          />
          <div className="register__btn">
            {!email.trim() ||
            !name.trim() ||
            !lastName.trim() ||
            !userName.trim() ||
            !password.trim() ||
            !passwordConfirm.trim() ? (
              <button className="register__button-unactive">Продолжить</button>
            ) : (
              <button onClick={handleSave} className="register__button-active">
                Продолжить
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
