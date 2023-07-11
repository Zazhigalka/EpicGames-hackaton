import { useNavigate } from "react-router-dom";
import React from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import epicGamesLogo from "../../assets/epic_games_logo.png";
import { Form } from "react-bootstrap";

const NavbarEpic = () => {
  const navigate = useNavigate();

  return (
    <Navbar className="navbar" bg="dark" data-bs-theme="dark">
      <Container className="navbar__container">
        <Navbar.Brand href="/" className="navbar__logo">
          <img id="epic-games-logo" src={epicGamesLogo} alt="" />
        </Navbar.Brand>
        <Nav className="me-auto navbar__titles">
          <Nav.Link className="navbar__items" href="#home">
            МАГАЗИН
          </Nav.Link>
          <Nav.Link className="navbar__items" href="#features">
            ДИСТРИБУЦИЯ
          </Nav.Link>
          <Nav.Link className="navbar__items" href="#pricing">
            ПОДДЕРЖКА
          </Nav.Link>
          <Nav.Link className="sqaure"></Nav.Link>
          <Nav.Link className="navbar__items" href="#home">
            UNREAL ENGINE
          </Nav.Link>
        </Nav>
        <Nav>
          <Form.Select></Form.Select>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarEpic;
