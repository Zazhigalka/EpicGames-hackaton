import React, { useState } from "react";
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
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

const Distribution = () => {
  const [plusMinus, setPlusMinus] = useState(false);
  const [plusMinus1, setPlusMinus1] = useState(false);
  const [plusMinus2, setPlusMinus2] = useState(false);
  const [plusMinus3, setPlusMinus3] = useState(false);
  const [plusMinus4, setPlusMinus4] = useState(false);
  const [plusMinus5, setPlusMinus5] = useState(false);
  const [plusMinus6, setPlusMinus6] = useState(false);
  const [plusMinus7, setPlusMinus7] = useState(false);
  const [plusMinus8, setPlusMinus8] = useState(false);
  const [plusMinus9, setPlusMinus9] = useState(false);

  const [activeQuestions1, setActiveQuestions1] = useState(false);
  const [activeQuestions2, setActiveQuestions2] = useState(false);
  const [activeQuestions3, setActiveQuestions3] = useState(false);
  const [activeQuestions4, setActiveQuestions4] = useState(false);
  const [activeQuestions5, setActiveQuestions5] = useState(false);
  const [activeQuestions6, setActiveQuestions6] = useState(false);
  const [activeQuestions7, setActiveQuestions7] = useState(false);
  const [activeQuestions8, setActiveQuestions8] = useState(false);
  const [activeQuestions9, setActiveQuestions9] = useState(false);
  const [activeQuestions10, setActiveQuestions10] = useState(false);

  const handleActive1 = () => {
    setActiveQuestions1(true);
    setActiveQuestions2(false);
    setActiveQuestions3(false);
    setActiveQuestions4(false);
    setActiveQuestions5(false);
    setActiveQuestions6(false);
    setActiveQuestions7(false);
    setActiveQuestions8(false);
    setActiveQuestions9(false);
    setActiveQuestions10(false);
  };

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
      <div className="questions__container">
        <div className="questions">
          <h3 className="questions__title">Часто задаваемые вопросы</h3>

          <div className="questions__item">
            <ul className="questions__ul">
              <li
                onClick={() => setPlusMinus(!plusMinus)}
                className="questions__li"
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h6 className="questions__items_title">
                    Зачем мне продавать свою игру на Epic Games Store?
                  </h6>

                  {plusMinus ? (
                    <img src={minus} alt="" className="questions__minus" />
                  ) : (
                    <img src={plus} alt="" className="questions__plus" />
                  )}
                </div>

                {plusMinus ? (
                  <p className="questions__items_descr">
                    Аудитория Epic Games Store составляет 230 миллионов человек
                    со всего мира, разделение дохода составляет 88%/12%, а ещё у
                    нас бесплатные услуги для размещения игр на рынке. Для игр
                    на базе Unreal Engine отчисления за движок не взимаются при
                    покупках в магазине с использованием платёжной системы Epic.
                    Покупки в приложении и продукты, использующие собственную
                    платёжную систему, не освобождаются от отчислений за движок.
                  </p>
                ) : (
                  ""
                )}
              </li>
              <div className="divider"></div>
              <li
                onClick={() => setPlusMinus1(!plusMinus1)}
                className="questions__li "
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h6 className="questions__items_title">
                    Моя игра создана на базе Unity или другого движка. Можно ли
                    мне представить её на рассмотрение в Epic Games Store?
                  </h6>
                  {plusMinus1 ? (
                    <img src={minus} alt="" className="questions__minus" />
                  ) : (
                    <img src={plus} alt="" className="questions__plus" />
                  )}
                </div>
                {plusMinus1 ? (
                  <p className="questions__items_descr">
                    Да. Epic Games Store приветствует любые движки. Epic
                    стремится предоставлять игрокам отличные игры, независимо от
                    того, на каком движке вы их создавали.
                  </p>
                ) : (
                  ""
                )}
              </li>
              <div className="divider"></div>
              <li
                onClick={() => setPlusMinus2(!plusMinus2)}
                className="questions__li"
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h6 className="questions__items_title">
                    Какие средства самостоятельнок публикации имеются в Epic
                    Games Store?
                  </h6>
                  {plusMinus2 ? (
                    <img src={minus} alt="" className="questions__minus" />
                  ) : (
                    <img src={plus} alt="" className="questions__plus" />
                  )}
                </div>
                {plusMinus2 ? (
                  <p className="questions__items_descr">
                    На портале разработчика Epic есть целый набор инструментов,
                    с помощью которых разработчики могут настраивать страницы
                    своих игр, цены, скидки, сборки и обновления в Epic Games
                    Store.
                  </p>
                ) : (
                  ""
                )}
              </li>
              <div className="divider"></div>
              <li
                onClick={() => setPlusMinus3(!plusMinus3)}
                className="questions__li"
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h6 className="questions__items_title">
                    Что такое портал разработчика Epic?
                  </h6>
                  {plusMinus3 ? (
                    <img src={minus} alt="" className="questions__minus" />
                  ) : (
                    <img src={plus} alt="" className="questions__plus" />
                  )}
                </div>
                {plusMinus3 ? (
                  <p className="questions__items_descr">
                    Портал разработчика — центральный узел для размещения игр в
                    Epic Games Store и улучшения игр с помощью Epic Online
                    Services. На портале разработчика можно обновить сведения о
                    товаре, настроить серверную часть ПО, оказать игрокам
                    поддержку и посмотреть данные о том, как используется игра,
                    об её финансах и прочем. Больше о портале разработчика можно
                    узнать{" "}
                    <a href="https://dev.epicgames.com/docs/dev-portal">
                      здесь.
                    </a>
                  </p>
                ) : (
                  ""
                )}
              </li>
              <div className="divider"></div>
              <li
                onClick={() => setPlusMinus4(!plusMinus4)}
                className="questions__li"
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h6 className="questions__items_title">
                    Какие ещё инструменты разработчика предлагает Epic?
                  </h6>
                  {plusMinus4 ? (
                    <img src={minus} alt="" className="questions__minus" />
                  ) : (
                    <img src={plus} alt="" className="questions__plus" />
                  )}
                </div>
                {plusMinus4 ? (
                  <p className="questions__items_descr">
                    "Компания Epic предлагает множество инструментов, служб и
                    сообществ, чтобы каждый мог создавать, развивать и
                    распространять программное обеспечение. В одной учётной
                    записи Epic Games можно работать в Unreal Engine, дополнять
                    созданное с помощью Epic Online Services и Kids Web
                    Services, а потом распространять ПК-игры в Epic Games Store.
                    Такие инструменты как Twinmotion, MetaHuman, Quixel и
                    Capturing Reality выведут ваше творение на новый уровень. А
                    в сообществе разработчиков Epic можно получить помощь от
                    коллег. Больше об инструментах, службах и сообществах Epic
                    можно узнать{" "}
                    <a href="https://dev.epicgames.com/en-US/home">здесь.</a>
                  </p>
                ) : (
                  ""
                )}
              </li>
              <div className="divider"></div>
              <li
                onClick={() => setPlusMinus5(!plusMinus5)}
                className="questions__li"
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h6 className="questions__items_title">
                    Как размещать игры в Epic Games Store?
                  </h6>
                  {plusMinus5 ? (
                    <img src={minus} alt="" className="questions__minus" />
                  ) : (
                    <img src={plus} alt="" className="questions__plus" />
                  )}
                </div>
                {plusMinus5 ? (
                  <p className="questions__items_descr">
                    Сначала нужно создать учётную запись или войти в имеющуюся
                    на портале разработчика:{" "}
                    <a href="https://dev.epicgames.com/portal/en-US/">
                      dev.epicgames.com/portal
                    </a>{" "}
                    . Затем программа поможет зарегистрировать вашу компанию и
                    сборку вашей первой игры. Подготовьте рабочие сведения: о
                    том, как с вами связаться, о налогах и выплатах. Помните,
                    что перед первым размещением игры в нашем магазине нужно
                    уплатить подлежащую зачёту пошлину в 100 долларов США.
                    Процесс самостоятельного размещения товаров в нашем магазине
                    описан в этой{" "}
                    <a href="https://store.epicgames.com/ru/news/epic-games-store-launches-self-publishing-tools-for-game-developers-and-publishers">
                      статье.
                    </a>
                  </p>
                ) : (
                  ""
                )}
              </li>
              <div className="divider"></div>
              <li
                onClick={() => setPlusMinus6(!plusMinus6)}
                className="questions__li"
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h6 className="questions__items_title">
                    Есть ли требования к игре для её выпуска в Epic Games Store?
                  </h6>
                  {plusMinus6 ? (
                    <img src={minus} alt="" className="questions__minus" />
                  ) : (
                    <img src={plus} alt="" className="questions__plus" />
                  )}
                </div>
                {plusMinus6 ? (
                  <p className="questions__items_descr">
                    Все товары, размещённые в Epic Games Store, должны
                    соответствовать нашим требованиям к материалам. Кроме того,
                    они должны запускаться и работать в соответствии с
                    описанием, которое пользователи видят на странице с
                    подробными сведениями о продукте (PDP).
                    Многопользовательские игры для ПК должны поддерживать
                    кросс-платформенность во всех магазинах. Таким образом
                    игроки, купившие многопользовательскую игру в одном
                    магазине, смогут играть с другими пользователями вне
                    зависимости от того, где была куплена игра. Для этого вы
                    должны реализовать кросс-платформенность самостоятельно,
                    прибегнуть к стороннему набору инструментальных средств
                    разработки программного обеспечения (SDK) или
                    воспользоваться бесплатными услугами Epic Online Services.
                    Достижения — все игры, которые выходят с помощью средств
                    публикации Epic Games Store после 9 марта 2023 года, должны
                    поддерживать достижения Epic Games Store, если поддерживают
                    систему достижений в другом магазине ПК-игр. Это помогает
                    нам стандартизировать пользовательский опыт вне зависимости
                    от того, где куплена игра. Больше о требованиях Epic Games
                    Store к играм можно узнать{" "}
                    <a href="https://dev.epicgames.com/docs/epic-games-store/requirements-guidelines/distribution-requirements/requirements-overview">
                      здесь.
                    </a>
                  </p>
                ) : (
                  ""
                )}
              </li>
              <div className="divider"></div>
              <li
                onClick={() => setPlusMinus7(!plusMinus7)}
                className="questions__li"
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h6 className="questions__items_title">
                    Может ли магазин запретить продавать что-то?
                  </h6>
                  {plusMinus7 ? (
                    <img src={minus} alt="" className="questions__minus" />
                  ) : (
                    <img src={plus} alt="" className="questions__plus" />
                  )}
                </div>

                {plusMinus7 ? (
                  <p className="questions__items_descr">
                    В Epic Games Store запрещено продавать товары, содержащие
                    запрещённые материалы: вызывающие ненависть,
                    дискриминирующие, порнографические или незаконные. Кроме
                    того, запрещены материалы, посягающие на интеллектуальную
                    собственность, которой вы не владеете или прав на
                    использование которой у вас нет, а также жульнические,
                    мошеннические и обманные схемы, вроде фиктивных игр или
                    вредоносных программ. Размещённые продукты, на которые
                    поступают жалобы о не соответствующих требованиям
                    материалах, могут быть перепроверены и удалены из Epic Games
                    Store. Больше о рейтинге и рекомендациях по материалам в
                    Epic Games Store можно узнать{" "}
                    <a href="https://dev.epicgames.com/docs/epic-games-store/requirements-guidelines/content-ratings">
                      здесь.
                    </a>
                  </p>
                ) : (
                  ""
                )}
              </li>
              <div className="divider"></div>
              <li
                onClick={() => setPlusMinus8(!plusMinus8)}
                className="questions__li"
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h6 className="questions__items_title">
                    Поддерживают ли Epic Games Store региональные цены?
                  </h6>
                  {plusMinus8 ? (
                    <img src={minus} alt="" className="questions__minus" />
                  ) : (
                    <img src={plus} alt="" className="questions__plus" />
                  )}
                </div>

                {plusMinus8 ? (
                  <p className="questions__items_descr">
                    Да, мы поддерживаем региональные цены. Также мы предлагаем
                    несколько региональных скидок с учётом особенностей каждого
                    региона.
                  </p>
                ) : (
                  ""
                )}
              </li>
              <div className="divider"></div>
              <li
                onClick={() => setPlusMinus9(!plusMinus9)}
                className="questions__li"
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h6 className="questions__items_title">
                    Как оформить возврат в Epic Games Store?
                  </h6>
                  {plusMinus9 ? (
                    <img src={minus} alt="" className="questions__minus" />
                  ) : (
                    <img src={plus} alt="" className="questions__plus" />
                  )}
                </div>

                {plusMinus9 ? (
                  <p className="questions__items_descr">
                    Игры и товары, купленные в Epic Games Store, обычно подлежат
                    возврату. У данных товаров есть отметка «Подлежит возврату».
                    Если игра или продукт отмечены как «не подлежащие возврату»,
                    вернуть деньги за них будет нельзя. Продукты, содержащие
                    виртуальную валюту и прочие расходные материалы, отмечены
                    «не подлежащими возврату», и деньги за них вернуть нельзя.
                    Также нельзя возвращать большинство покупок из приложения.
                    Кроме того, компания Epic не возвращает средства за покупки,
                    сделанные за пределами Epic Games Store. Больше о возвратах
                    в Epic Games Store можно узнать{" "}
                    <a href="https://www.epicgames.com/site/ru/store-refund-policy">
                      здесь.
                    </a>
                  </p>
                ) : (
                  ""
                )}
              </li>
              <div className="divider"></div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
