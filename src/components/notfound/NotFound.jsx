import React from "react";
import "./notFound.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="page_not_found">
      <div className="error">
        <h2>404</h2>
      </div>
      <div className="page__not_found-new">
        <h1>Страница Не Найдена!</h1>
        <Button id="button__home" onClick={() => navigate("/")}>
          Главная страница{" "}
        </Button>
      </div>
      <img
        id="rex"
        src="https://fortniteskins.net/wp-content/uploads/2023/06/cosmetics/22979872_CID_093_Athena_Commando_M_Dinosaur_full_featured.png"
        alt=""
      />
    </div>
  );
};

export default NotFound;
