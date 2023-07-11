import React from "react";
import "./wishList.css";
import { Form } from "react-bootstrap";
import mail from "../../assets/mail-icon.svg";
import { useNavigate } from "react-router-dom";

const WishList = () => {
  const navigate = useNavigate();

  return (
    <div className="wish-list__container">
      <div className="wish-list__title">
        <p>Список желаемого</p>
        <div className="wish-list__rewards">
          <p>Вознаграждения Epic</p>
          <div className="rewards__price">0,00$</div>
        </div>
      </div>
      <div className="wish-list__subscribe">
        <div>
          <img src={mail} id="mail" alt="" />
          <span>
            Подписаться на уведомления о списке желаемого по электронной почте.
          </span>
        </div>
        <Form>
          <Form.Check type="switch" id="custom-switch" />
        </Form>
      </div>
      <div className="wish-list__bottom">
        <span>Сортировка: </span>
        <select className="select">
          <option className="options">Распродажа</option>
          <option className="options" value="">
            <button>Недавно добавленные</button>
          </option>
          <option className="options" value="">
            <button>По алфафиту</button>
          </option>
          <option className="options" value="">
            <button>Цена: По возрастанию</button>
          </option>
          <option className="options" value="">
            <button>Цена: По убыванию</button>
          </option>
        </select>
        <div className="wish-list__catalog">
          <p className="wish-list__catalog_title">
            В список желаемого пока что ничего не добавлено.
          </p>
          <p className="wish-list__catalog_desc" onClick={() => navigate("/")}>
            Выбирайте игры и приложения в магазине
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishList;
