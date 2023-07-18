import React from "react";
import "./wishListCard.css";
import { useProduct } from "../../contexts/ProductContextProvider";

const WishListCard = ({ item }) => {
  const { deleteFromFavorites } = useProduct();

  const handleDeleteFromFavorites = (itemId) => {
    // Ваш код обработки удаления элемента из списка желаемого
    deleteFromFavorites(itemId);
  };

  return (
    <div className="wish-list__items">
      <div className="wish-list__items_left">
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
        <p className="w-l-i-r-p">{item.price} $</p>
        <div className="wish-list__items_to-cart">
          <button
            className="wish-list_delete"
            onClick={() => handleDeleteFromFavorites(item.id)}
          >
            Удалить
          </button>
          <button className="wish-list_to-cart">Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
