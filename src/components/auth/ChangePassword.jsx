import React, { useState } from "react";
import "./ChangePassword-styles.css";
import auth__logo from "../../assets/epic_games_logo.png";
import { Button, Spinner } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { handleChangePassword, loading, error } = useAuth();

  function handleSave() {
    const formData = new FormData();

    formData.append("old_password", oldPassword);
    formData.append("new_password", newPassword);
    handleChangePassword(formData);
  }

  return (
    <div className="changepassword">
      <img className="auth__logo" src={auth__logo} alt="" />
      <h6 className="changepassword__title">Изменить пароль</h6>
      <div className="auth__inputs">
        <div className="auth__emailPassword">
          <input
            onChange={(e) => setOldPassword(e.target.value)}
            type="password"
            placeholder="Старый пароль"
          />
          <input
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            placeholder="Новый пароль"
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
            {!oldPassword.trim() || !newPassword.trim() ? (
              <button className="auth__button-unactive">Изменить пароль</button>
            ) : (
              <button onClick={handleSave} className="auth__button-active">
                Изменить пароль
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangePassword;
