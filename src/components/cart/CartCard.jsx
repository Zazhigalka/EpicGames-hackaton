import React from "react";
import { useCart } from "../../contexts/CartContextProvider";
import "./cartCard.css";

const CartCard = ({ item }) => {
  const { deleteCartProduct } = useCart();

  console.log(item.item);

  return (
    <div
      className="cart-list__items"
      //   onClick={() => navigate(`/product/${item.id}`)}
    >
      <div className="cart-list__items_left">
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
        <p className="c-l-i-r-p">{item.item.price} $</p>
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
