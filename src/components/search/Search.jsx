import React, { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  FormLabel,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./Search.css";
import search_icon from "../../assets/search.png";
import { useNavigate } from "react-router-dom";
import cart__icon from "../../assets/cart__icon.png";
import heart__icon from "../../assets/search__heart_icon.png";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useProduct } from "../../contexts/ProductContextProvider";

const Search = () => {
  const navigate = useNavigate();

  const { currentUser } = useAuth();
  const { searchProducts } = useProduct();

  const path = document.location.pathname;

  return (
    <Navbar style={{ height: "90px" }} className="search" data-bs-theme="dark">
      <Container className="search__container">
        <div className="search__input_group">
          <img src={search_icon} alt="" className="search__input_icon" />
          <input
            type="text"
            className="search__input"
            onChange={(e) => searchProducts(e.target.value)}
            placeholder="Искать в магазине"
          />
        </div>
        <Nav className="search__items_group">
          <Nav className="search__items_group_left">
            <select
              className="search__select select"
              aria-label="Default select example"
              style={{ fontSize: "14px", height: "30px", margin: "auto" }}
              onChange={(e) => {
                navigate(e.target.value);
              }}
            >
              <option value="/">Главное</option>
              <option value="/products">Все игры</option>
              <option value="3">Новости</option>
            </select>
            <Nav.Link className="search__linkes">
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
            <Nav.Link className="search__linkes">
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
            <Nav.Link className="search__linkes" href="#pricing">
              <span
                className={`search__items ${
                  path === "/news" ? "search__items_active" : ""
                }`}
              >
                Новости
              </span>
            </Nav.Link>
          </Nav>
          {currentUser ? (
            <Nav>
              <Nav.Link>
                <span
                  onClick={() => {
                    navigate("/wish-list");
                  }}
                  className={`search__items search__favorites ${
                    path === "/wish-list" ? "search__items_active" : ""
                  }`}
                >
                  Список желаемого
                </span>
                <img
                  onClick={() => {
                    navigate("/wish-list");
                  }}
                  className={`search__items search__favorites_icon ${
                    path === "/wish-list" ? "search__items_active" : ""
                  }`}
                  src={heart__icon}
                  alt=""
                />
              </Nav.Link>
              <Nav.Link>
                <span
                  onClick={() => {
                    navigate("/cart");
                  }}
                  className={`search__items search__cart ${
                    path === "/cart" ? "search__items_active" : ""
                  }`}
                  style={{ justifySelf: "end" }}
                >
                  Корзина
                </span>

                <img
                  onClick={() => {
                    navigate("/cart");
                  }}
                  className={`search__items search__cart_icon ${
                    path === "/cart" ? "search__items_active" : ""
                  }`}
                  src={cart__icon}
                  alt=""
                />
              </Nav.Link>
            </Nav>
          ) : null}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Search;
