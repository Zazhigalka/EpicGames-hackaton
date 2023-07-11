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
import epic_logo from "../../assets/epic-developer-community-logo.svg";
import epic_services_logo from "../../assets/epic-online-services-icon.svg";
import epic_unreal_logo from "../../assets/unreal-engine-icon.svg";

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
      <div className="container__community">
        <div className="community">
          <div className="community__main">
            <img className="community__main_image" src={epic_logo} alt="" />
          </div>
          <div className="community__descr">
            <p className="community__descr_p">
              Присоединяйтесь к обсуждению или создавайте <br /> темы,
              посвящённые дистрибуции, получая <br /> помощь от сообщества
            </p>
            <a className="communtiy__descr_a" href="">
              Станьте частью сообщества
            </a>
          </div>
        </div>
      </div>

      <div className="container__services">
        <div className="services">
          <div className="services__left">
            <img
              src={epic_services_logo}
              alt=""
              className="services__left_image"
            />
            <div className="services__left_descr">
              <p className="services__left_descr_p">
                Модульный набор сетевых услуг для подключения к сообществам всех
                платформ
              </p>
              <a
                href="https://dev.epicgames.com/en-US/services"
                className="services__left_descr_a"
              >
                Взгляните на наши услуги
              </a>
            </div>
          </div>
          <div className="services__right">
            <img
              className="services__right_image"
              src={epic_unreal_logo}
              alt=""
            />
            <div className="services__right_descr">
              <p className="services__right_descr_p">
                Самый открытый и продвинутый в мире инструмент для создания
                трёхмерных моделей в реальном времени
              </p>
              <a
                href="https://www.unrealengine.com/en-US"
                className="services__right_descr_a"
              >
                Узнать больше
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
