import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import "./navbarAdaptive.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import epicGamesLogo from "../../assets/epic_games_logo.png";
import userSigned from "../../assets/user-signed.svg";
import userIcon from "../../assets/user.svg";
import { Dropdown } from "react-bootstrap";
import burgerMenu from "../../assets/burger-menu.svg";
import closeMenu from "../../assets/close.svg";
import { useAuth } from "../../contexts/AuthContextProvider";

const NavbarEpic = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [second, setSecond] = useState(false);

  const [username, setUsername] = useState("");
  const [isSeller, setIsSeller] = useState(false);

  const { currentUser, logout, checkAuth, getUserData } = useAuth();

  async function fetchData() {
    try {
      const email = localStorage.getItem("email");
      if (email) {
        const user = await getUserData(email);
        if (user) {
          setUsername(user.username);
          setIsSeller(user.is_seller);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentUser]);

  const path = document.location.pathname;

  const handleElementClick = () => {
    setSecond(false);
    setIsClicked(true);
  };

  const handleElementSecond = () => {
    setIsClicked(false);
    setSecond(true);
  };

  const [showUser, setShowUser] = useState(false);

  const handleMouseEnter = () => {
    setShowUser(true);
  };

  const handleMouseLeave = () => {
    setShowUser(false);
  };

  // burger menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className="navbar" data-bs-theme="dark">
      <Container className="navbar__container">
        <Navbar.Brand className="navbar__logo">
          <img
            id="epic-games-logo"
            src={epicGamesLogo}
            alt=""
            onClick={() => {
              navigate("/");
              handleElementClick();
            }}
          />
        </Navbar.Brand>
        <Nav className="me-auto navbar__titles">
          <Nav.Link
            className={path === "/" ? "navbar__items clicked" : "navbar__items"}
            onClick={() => {
              navigate("/");
              handleElementClick();
            }}
          >
            МАГАЗИН
          </Nav.Link>
          <Nav.Link
            className={
              path === "/distribution"
                ? "navbar__items clicked"
                : "navbar__items"
            }
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
        <Dropdown
          show={showUser}
          className="navbar__user"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          align="center"
        >
          <Dropdown.Toggle as={CustomToggle} className="user-icon">
            <img src={userIcon} id="user__icon" alt="" />
          </Dropdown.Toggle>

          {currentUser ? (
            <Dropdown.Menu className="user__menu">
              {isSeller ? (
                <Dropdown.Item
                  className="dropdown__items"
                  onClick={() => navigate("/addproduct")}
                >
                  Добавить продукт
                </Dropdown.Item>
              ) : null}

              <Dropdown.Item
                className="dropdown__items"
                onClick={() => navigate("/wish-list")}
              >
                Список желаемого
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown__items"
                onClick={() => navigate("/cart")}
              >
                Корзина
              </Dropdown.Item>
              <Dropdown.Item className="dropdown__items" onClick={logout}>
                Выйти
              </Dropdown.Item>
            </Dropdown.Menu>
          ) : null}

          {currentUser ? (
            <Nav className="navbar__user_name" style={{ cursor: "pointer" }}>
              {username}
            </Nav>
          ) : (
            <Nav
              style={{ cursor: "pointer" }}
              className="navbar__user_name"
              onClick={() => navigate("/auth")}
            >
              Войти
            </Nav>
          )}
        </Dropdown>

        <a href="https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi">
          <button className="download">Загрузить</button>
        </a>

        <div className="burger__menu">
          <div className="burger__menu_icon" onClick={toggleMenu}>
            <img src={burgerMenu} alt="Меню" id="burger__icon" />
          </div>
        </div>
        {isOpen && (
          <div className="menu__items">
            <div
              className="menu__close"
              onClick={() => {
                toggleMenu();
              }}
            >
              <img src={closeMenu} alt="Закрыть" id="menu__close_icon" />
            </div>
            <ul style={{ width: "100%" }}>
              <li
                className="menu__titles"
                onClick={() => {
                  navigate("/");
                  toggleMenu();
                }}
              >
                магазин
              </li>
              <div className="menu__border"></div>

              <li
                className="menu__titles"
                onClick={() => {
                  navigate("/distribution");
                  toggleMenu();
                }}
              >
                ДИСТРИБУЦИЯ
              </li>
              <div className="menu__border"></div>

              <li className="menu__titles">
                <a href="https://www.epicgames.com/help" target="_blank">
                  ПОДДЕРЖКА
                </a>
              </li>
              <div className="menu__border"></div>

              <li className="menu__titles">
                <a href="https://www.unrealengine.com/en-US" target="_blank">
                  Unreal engine
                </a>
              </li>
              <div className="menu__border"></div>
            </ul>
            <div className="menu__bottom">
              <div className="menu__left">
                <img src={userIcon} alt="" id="menu__user_icon" />
                <p id="menu__user_name">
                  {currentUser ? `${currentUser}` : "No auth user"}
                </p>
              </div>
              <a
                href="https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi"
                className="menu__right"
              >
                ДОСТУПНО ТОЛЬКО НА ПК/MAC
              </a>
            </div>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    style={{ width: "20%" }}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

export default NavbarEpic;
