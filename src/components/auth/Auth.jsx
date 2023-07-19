import React, { useState } from "react";
import "./Auth.css";
import "./AuthAdaptive.css"
import auth__logo from "../../assets/epic_games_logo.png";
import { Button, InputGroup, Spinner } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading, error } = useAuth();

  function handleSave() {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    handleLogin(formData, email);
  }

  const navigate = useNavigate();

  return (
    <div className="auth">
      <img className="auth__logo" src={auth__logo} alt="" />
      <h6 className="auth__title">ВОЙТИ В УЧЕТНУЮ ЗАПИСЬ</h6>
      <div className="auth__inputs">
        <div className="auth__emailPassword">
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
          {error ? <p style={{ color: "#f2f2f2" }}>{error}</p> : null}
        </div>

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
          <div className="auth__btn">
            {!email.trim() || !password.trim() ? (
              <button className="auth__button-unactive">
                ВОЙТИ ПРЯМО СЕЙЧАС
              </button>
            ) : (
              <button onClick={handleSave} className="auth__button-active">
                ВОЙТИ ПРЯМО СЕЙЧАС
              </button>
            )}
          </div>
        )}
        <div className="auth-links">
          <a href="" onClick={() => navigate("/register")}>
            Нет аккаунта? Зарегестрирутесь!
          </a>
          <a href="" onClick={() => navigate("/change-password")}>
            Забыли пароль?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
