import React, { useState } from "react";
import "./Register.css";
import auth__logo from "../../assets/epic_games_logo.png";
import { Button, Form, Spinner } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [isSeller, setIsSeller] = useState(false);

  const { handleRegister, handleRegisterSeller, loading, error } = useAuth();

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

  const navigate = useNavigate();

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
            {error ? <p style={{ color: "#f2f2f2" }}>{error}</p> : null}
          </div>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Вы продавец?"
            className="register__isSeller"
            onChange={(e) => setIsSeller(e.target.checked)}
          />

          {loading ? (
            <Button className="auth__btn" variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                role="status"
                aria-hidden="true"
              />
              Загрузка...
            </Button>
          ) : (
            <div className="register__btn">
              {!email.trim() ||
              !name.trim() ||
              !lastName.trim() ||
              !userName.trim() ||
              !password.trim() ||
              !passwordConfirm.trim() ? (
                <button className="register__button-unactive">
                  Продолжить
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  className="register__button-active">
                  Продолжить
                </button>
              )}
            </div>
          )}
          <a
            style={{
              width: "80%",
              color: "#f2f2f2",
              alignSelf: "start",
              marginTop: "20px",
            }}
            href=""
            onClick={() => navigate("/auth")}>
            Уже есть аккаунт? Войдите!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
