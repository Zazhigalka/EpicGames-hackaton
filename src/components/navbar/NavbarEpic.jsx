import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import epicGamesLogo from "../../assets/epic_games_logo.png";
import userSigned from "../../assets/user-signed.svg";
import userIcon from "../../assets/user.svg";

const NavbarEpic = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [second, setSecond] = useState(false);

  const handleElementClick = () => {
    setSecond(false);
    setIsClicked(true);
  };

  const handleElementSecond = () => {
    setIsClicked(false);
    setSecond(true);
  };

  return (
    <Navbar className="navbar" data-bs-theme="dark">
      <Container className="navbar__container">
        <Navbar.Brand href="/" className="navbar__logo">
          <img id="epic-games-logo" src={epicGamesLogo} alt="" />
        </Navbar.Brand>
        <Nav className="me-auto navbar__titles">
          <Nav.Link
            className={isClicked ? "navbar__items clicked" : "navbar__items"}
            onClick={() => {
              navigate("/");
              handleElementClick();
            }}
          >
            МАГАЗИН
          </Nav.Link>
          <Nav.Link
            className={second ? "navbar__items clicked" : "navbar__items"}
            onClick={() => {
              navigate("/distribution");
              handleElementSecond();
            }}
          >
            ДИСТРИБУЦИЯ
          </Nav.Link>
          <Nav.Link
            className="navbar__items no-jump"
            href="https://www.epicgames.com/help"
            target="_blank"
          >
            ПОДДЕРЖКА
          </Nav.Link>
          <Nav className="square"></Nav>
          <Nav.Link
            className="navbar__items no-jump"
            href="https://www.unrealengine.com/en-US"
            target="_blank"
          >
            UNREAL ENGINE
          </Nav.Link>
        </Nav>
        <Nav className="navbar__user">
          <div className="user-icon">
            <img src={userIcon} id="user__icon" alt="" />
          </div>
          <div className="user__menu">
            <div>
              <p>Учетная запись</p>
              <li>Корзина</li>
              <li>Выйти</li>
            </div>
          </div>
          <Nav className="navbar__user_name">fantep</Nav>
        </Nav>

        <a href="https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi">
          <button className="download">Загрузить</button>
        </a>
      </Container>
    </Navbar>
  );
};

export default NavbarEpic;
