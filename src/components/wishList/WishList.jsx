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
            <button>По алфавиту</button>
          </option>
          <option className="options" value="">
            <button>Цена: По возрастанию</button>
          </option>
          <option className="options" value="">
            <button>Цена: По убыванию</button>
          </option>
        </select>
        <div className="wish-list__catalog">
          <div className="wish-list__svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="wish-list__svg"
              viewBox="0 0 45 52"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z"
                  fill="currentColor"
                ></path>
                <path
                  stroke="#FFF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5"
                ></path>
              </g>
            </svg>
          </div>
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