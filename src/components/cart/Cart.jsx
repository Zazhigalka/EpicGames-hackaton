import React, { useEffect } from "react";
import "./cart.css";
import "./cartAdaptive.css";
import Search from "../search/Search";
import { useCart } from "../../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";
import CartCard from "./CartCard";
import { useState } from "react";

const Cart = () => {
  const { cart, getCart } = useCart();
  const navigate = useNavigate();

  let number = cart.totalPrice;
  let formattedNumber = number.toFixed(2);

  useEffect(() => {
    getCart();
  }, []);

  const [phone, setPhone] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleSubmit = () => {
    if (phone.trim() === "" || cardNumber.trim() === "") {
      alert("Заполните все поля!");
      return;
    }

    alert("Успешная покупка!");
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <div className="cart__container">
      <div
        style={{
          position: "sticky",
          top: "0px",
          left: "0",
          right: "0",
        }}
      >
        <Search />
      </div>
      <div className="cart__title">
        <p id="cart__title_main">Моя корзина</p>
        <div className="cart__price">
          <p id="cart__price_left">Вознаграждения Epic</p>
          <p id="cart__price_right">0,00$</p>
        </div>
      </div>
      {cart?.products.length > 0 ? (
        <div className="cart__catalog">
          <div className="cart__left">
            {cart.products.map((item) => (
              <CartCard item={item} key={item.item.id} />
            ))}
          </div>
          <div className="cart__right">
            <p className="cart__right_title">Все игры и приложения</p>
            <div className="cart__pay">
              <input
                type="number"
                placeholder="Введите номер телефона"
                className="pay-inputs"
                value={phone}
                onChange={handlePhoneChange}
              />
              <input
                type="number"
                className="pay-inputs"
                placeholder="Введите номер карты"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
              <div className="cart__pay_price">
                <p>Цена</p>
                <p>{formattedNumber} $</p>
              </div>
              <button className="pay__confirm" onClick={handleSubmit}>
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart__none">
          <div className="cart__catalog_svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="cart__svg"
              viewBox="0 0 45 52"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z"
                  fill="currentColor"
                ></path>
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5"
                ></path>
              </g>
            </svg>
          </div>

          <p id="cart__is_empty">Ваша корзина пуста.</p>
          <p id="cart__to_store" onClick={() => navigate("/")}>
            Выбирайте игры и приложения в магазине
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
