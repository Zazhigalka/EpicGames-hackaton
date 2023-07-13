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
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const path = document.location.pathname;

  return (
    <Navbar style={{ height: "90px" }} className="search" data-bs-theme="dark">
      <Container className="search__container">
        <div className="search__input_group">
          <img src={search_icon} alt="" className="search__input_icon" />
          <input
            type="text"
            className="search__input"
            placeholder="Искать в магазине"
          />
        </div>
        <Nav className="search__items_group">
          <Nav className="search__items_group_left">
            <Nav.Link>
              <span
                onClick={() => {
                  navigate("/");
                }}
                className={`search__items ${
                  path === "/" ? "search__items_active" : ""
                }`}
              >
                Главное
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className={`search__items ${
                  path === "/products" ? "search__items_active" : ""
                }`}
                onClick={() => {
                  navigate("/products");
                }}
              >
                Все игры
              </span>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <span
                className={`search__items ${
                  path === "/news" ? "search__items_active" : ""
                }`}
              >
                Новости
              </span>
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link>
              <span
                onClick={() => {
                  navigate("/wish-list");
                }}
                className={`search__items ${
                  path === "/wish-list" ? "search__items_active" : ""
                }`}
              >
                Список желаемого
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                onClick={() => {
                  navigate("/cart");
                }}
                className={`search__items ${
                  path === "/cart" ? "search__items_active" : ""
                }`}
                style={{ justifySelf: "end" }}
              >
                Корзина
              </span>
            </Nav.Link>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Search;
