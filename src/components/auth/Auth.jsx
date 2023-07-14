import React, { useState } from 'react';
import './Auth.css';
import auth__logo from '../../assets/epic_games_logo.png';
import { InputGroup } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleLogin } = useAuth();

  function handleSave() {
    if (!email.trim() || !password.trim()) {
      alert('заполните поля!');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
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
        </div>

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

        <a
          style={{
            width: '80%',
            color: '#f2f2f2',
            alignSelf: 'start',
            marginTop: '20px',
          }}
          href=""
          onClick={() => navigate('/register')}>
          Нет аккаунта? Зарегестрирутесь!
        </a>
      </div>
    </div>
  );
};

export default Auth;
