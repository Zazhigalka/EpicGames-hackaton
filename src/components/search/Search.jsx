import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./Search.css";
import search_icon from "../../assets/search.png";

const Search = () => {
  const [links1, setLinks1] = useState(false);
  const [links2, setLinks2] = useState(false);
  const [links3, setLinks3] = useState(false);

  const link1Active = () => {
    setLinks1(true);
    setLinks2(false);
    setLinks3(false);
  };

  const link2Active = () => {
    setLinks1(false);
    setLinks2(true);
    setLinks3(false);
  };

  const link3Active = () => {
    setLinks1(false);
    setLinks2(false);
    setLinks3(true);
  };

  return (
    <Navbar className="search" data-bs-theme="dark">
      <Container>
        <div className="search__input_group">
          <img src={search_icon} alt="" className="search__input_icon" />
          <input
            type="text"
            className="search__input"
            placeholder="Искать в магазине"
          />
        </div>
        <Nav className="me-auto search__items_group">
          <Nav.Link style={{ marginRight: "1rem" }} href="#home">
            <span
              onClick={link1Active}
              className={`search__items ${
                links1 ? "search__items_active" : ""
              }`}
            >
              Главное
            </span>
          </Nav.Link>
          <Nav.Link style={{ marginRight: "1rem" }} href="#features">
            <span
              onClick={link2Active}
              className={`search__items ${
                links2 ? "search__items_active" : ""
              }`}
            >
              Все игры
            </span>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <span
              onClick={link3Active}
              className={`search__items ${
                links3 ? "search__items_active" : ""
              }`}
            >
              Новости
            </span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Search;
