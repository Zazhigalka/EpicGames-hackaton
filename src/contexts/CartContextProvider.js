import React, { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")) || {
    products: [],
    totalPrice: 0,
  },
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};

const calcTotalPrice = (products) => {
  return products.reduce((total, product) => total + product.subPrice, 0);
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || {
      products: [],
      totalPrice: 0,
    };
    dispatch({ type: "GET_CART", payload: cart });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || {
      products: [],
      totalPrice: 0,
    };

    let productToFind = cart.products.find(
      (elem) => elem.item.id === product.id
    );

    if (productToFind) {
      cart.products = cart.products.map((elem) =>
        elem.item.id === product.id
          ? {
              ...elem,
              count: elem.count + 1,
              subPrice: elem.subPrice + +product.price,
            }
          : elem
      );
    } else {
      cart.products.push({
        item: product,
        count: 1,
        subPrice: +product.price,
      });
    }

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: "GET_CART", payload: cart });
  };

  const checkProductCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      return cart.products.some((elem) => elem.item.id === id);
    }
    return false;
  };

  const deleteCartProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: "GET_CART", payload: cart });
  };

  const values = {
    getCart,
    addProductToCart,
    cart: state.cart,
    deleteCartProduct,
    checkProductCart,
  };

  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
