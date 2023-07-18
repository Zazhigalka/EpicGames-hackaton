import React from "react";
import "./wishListCard.css";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";

const WishListCard = ({ item }) => {
  const { deleteFromFavorites } = useProduct();
  const navigate = useNavigate();
  const { addProductToCart, checkProductCart } = useCart();

  const handleDeleteFromFavorites = (itemId) => {
    deleteFromFavorites(itemId);
  };

  return (
    <div className="wish-list__items">
      <div
        className="wish-list__items_left"
        onClick={() => navigate(`/product/${item.id}`)}
      >
        <img
          src={item.preview}
          alt={item.title_of_game}
          className="wish-list__items_img"
        />
        <div className="wish-list__items_descr">
          <p className="w-l-i-d-f">Базовая игра</p>
          <p className="w-l-i-d-s">{item.title_of_game}</p>
        </div>
      </div>
      <div className="wish-list__items_right">
        <p
          onClick={() => navigate(`/product/${item.id}`)}
          className="w-l-i-r-p"
        >
          {item.price} $
        </p>
        <div className="wish-list__items_to-cart">
          <button
            className="wish-list_delete"
            onClick={() => handleDeleteFromFavorites(item.id)}
          >
            Удалить
          </button>
          {checkProductCart(item.id) ? (
            <button
              className="wish-list_to-cart"
              onClick={() => navigate("/cart")}
            >
              Посмотреть в корзине
            </button>
          ) : (
            <button
              className="wish-list_to-cart"
              onClick={() => addProductToCart(item)}
            >
              Добавить в корзину
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
