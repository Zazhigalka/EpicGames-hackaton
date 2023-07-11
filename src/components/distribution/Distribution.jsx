import React from "react";
import distribution_gif from "../../assets/epic_games_distribution.webp";
import "./Distribution.css";
import head__logo from "../../assets/epic-games-logo-store.webp";
import epic_earth_icon from "../../assets/epic-games-earth-icon.svg";
import epic_graphic_icon from "../../assets/epic-games-graphic-icon.svg";
import epic_player_icon from "../../assets/epic-games-player-icon.svg";
import epic_payment_icon from "../../assets/epic-games-payment-icon.svg";
import epic_wallet_icon from "../../assets/epic-games-wallet-icon.svg";
import epic_rating_icon from "../../assets/epic-games-ratings-icon.svg";

const Distribution = () => {
  return (
    <div className="distribution">
      <div className="container__head">
        <div className="head">
          <img src={distribution_gif} className="head__image" alt="" />
          <div className="head__info">
            <img src={head__logo} alt="" className="head__info_logo" />
            <h3 className="head__info_title">
              Теперь для всех <br /> издателей и <br /> разработчиков
            </h3>
            <button className="head__info_btn">РЕГИСТРИРУЙТЕСЬ</button>
            <p className="head__info_descr">
              Новые средства самостоятельной публикации позволят распространять
              ПК- <br /> игры в Epic Games Store.
            </p>
          </div>
        </div>
      </div>
      <div className="container__info">
        <div className="epic__info">
          <div className="epic__info_item">
            <img src={epic_earth_icon} alt="" className="epic__info_image" />
            <h4 className="epic__info_title">
              Выйдите на глобальную аудиторию
            </h4>
            <p className="epic__item_descr">
              Прямой выход на 230 миллионов пользователей Epic в 187 странах, с
              поддержкой 16 языков.
            </p>
          </div>
          <div className="epic__info_item">
            <img src={epic_graphic_icon} alt="" className="epic__info_image" />
            <h4 className="epic__info_title">Разделение дохода 88%/12%</h4>
            <p className="epic__item_descr">
              Вам останется 88% прибыли от продаж, и можно будет отслеживать ход
              торговли с помощью встроенных аналитических инструментов.
            </p>
          </div>{" "}
          <div className="epic__info_item">
            <img src={epic_player_icon} alt="" className="epic__info_image" />
            <h4 className="epic__info_title">Привлекайте игроков</h4>
            <p className="epic__item_descr">
              В магазине есть списки желаемого, достижения, общие скидки и
              прочее!
            </p>
          </div>{" "}
          <div className="epic__info_item">
            <img src={epic_payment_icon} alt="" className="epic__info_image" />
            <h4 className="epic__info_title">
              Торговля по всему миру через интернет
            </h4>
            <p className="epic__item_descr">
              Платёжная система Epic поддерживает 76 способов оплаты и 47
              местных валют, а будет ещё больше.
            </p>
          </div>{" "}
          <div className="epic__info_item">
            <img src={epic_wallet_icon} alt="" className="epic__info_image" />
            <h4 className="epic__info_title">Кошелёк Epic</h4>
            <p className="epic__item_descr">
              Пользователи 140 стран могут добавлять деньги в свой кошелёк, а
              потом тратить их на товары и услуги в магазине.
            </p>
          </div>{" "}
          <div className="epic__info_item">
            <img src={epic_rating_icon} alt="" className="epic__info_image" />
            <h4 className="epic__info_title">Прочие преимущества</h4>
            <p className="epic__item_descr">
              На портале разработчиков Epic можно легко дать игре рейтинг IARC,
              запросить бесплатную локализацию товарной страницы и подключить
              программу поддержки авторов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
