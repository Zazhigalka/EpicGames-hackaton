import React from "react";
import { useCart } from "../../contexts/CartContextProvider";
import "./cartCard.css";
import { useNavigate } from "react-router-dom";

const CartCard = ({ item }) => {
  const { deleteCartProduct } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-list__items">
      <div
        className="cart-list__items_left"
        onClick={() => navigate(`/product/${item.item.id}`)}
      >
        <img
          src={item.item.preview}
          alt={item.item.title_of_game}
          className="cart-list__items_img"
        />
        <div className="cart-list__items_descr">
          <p className="c-l-i-d-f">Базовая игра</p>
          <p className="c-l-i-d-s">{item.item.title_of_game}</p>
        </div>
      </div>
      <div className="cart-list__items_right">
        <p
          className="c-l-i-r-p"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          {item.item.price == 0 ? "Бесплатно" : `${item.item.price} $`}
        </p>
        <button
          className="cart-list_delete"
          onClick={() => deleteCartProduct(item.item.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default CartCard;
