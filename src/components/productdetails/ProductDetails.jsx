import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import "./Product-Details-adaptive_styles.css";
import { Button } from "react-bootstrap";
import CarouselBox from "../Carousel/CarouselBox";
import addTo from "../../assets/add-to.png";
import shareIcon from "../../assets/share.png";
import reportIcon from "../../assets/flag.png";
import { ReactComponent as UnrealEngineIcon } from "../../assets/unrealEngine.svg";
import Search from "../search/Search";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";

const ProductDetails = () => {
  const { getOneProduct, oneProduct, deleteProduct } = useProduct();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  console.log(oneProduct);
  return (
    <div style={{ backgroundColor: "#121212" }}>
      <div
        style={{
          position: "sticky",
          left: "0",
          right: "0",
          top: "0",
          zIndex: "999",
        }}
      >
        <Search />
      </div>
      <div>
        <div className="product-details-container">
          <section className="product-details__section1">
            <div className="product-details-left">
              <h3>Fortnite</h3>
              <div className="product-details-rating__title">
                <div className="raiting-on-num">4.3</div>
              </div>
              <CarouselBox />
              <p
                style={{
                  fontSize: "1.3em",
                  color: "#f5f5f5",
                  margin: "3em 0",
                  width: "100%",
                }}
              >
                Собирайте друзей и отправляйтесь в игру Fortnite от Epic Games,
                в которой вас ждёт грандиозная битва для 100 игроков. В ней вам
                предстоит искать полезную добычу, добывать материалы, создавать
                предметы и отстреливаться от врагов. Всё вместе это делает
                каждый матч совершенно непредсказуемым, а с каждым новым сезоном
                игра становится ещё больше и интереснее.
              </p>

              {showMore && (
                <p
                  style={{
                    fontSize: "1.3em",
                    color: "rgba(245, 245, 245, 0.6)",
                    margin: "3em 0",
                    width: "100%",
                  }}
                >
                  Исследуйте большой разрушаемый мир, в котором каждого игрока
                  ждут неповторимые приключения. Объединяйтесь с друзьями,
                  ускоряйтесь, карабкайтесь и пробивайте себе путь к победе при
                  любых условиях: со строительством в «Королевской битве» или
                  без строительства в «Нулевой высоте». Откройте для себя новые
                  способы игры: здесь вы найдёте тысячи самых разных игр от
                  наших авторов — приключения, ролевые игры, игры на выживание и
                  многое другое. Или отбивайтесь от полчищ монстров с тремя
                  друзьями в «Сражении с Бурей». Дикие земли ждут вас в третьем
                  сезоне четвёртой главы Королевской битвы Fortnite. Центральная
                  часть острова разрушилась, явив свету огромный неизведанный
                  мир джунглей, полный древних тайн. Забирайтесь в кроны
                  деревьев, катайтесь на ящерах, прыгайте в грязь, чтобы
                  ускориться или для маскировки. Вычисляйте врагов с помощью
                  винтовки с тепловизором, скользите по лианам, стреляя из
                  автомата с дисковым магазином, и превращайте оппонентов в
                  зрителей с помощью кибертронской пушки. Откройте для себя
                  моду, неподвластную времени, с экипировкой боевого пропуска
                  третьего сезона четвёртой главы. С покупкой нового боевого
                  пропуска вы сразу получите устремлённую в будущее Эру.
                  Повышайте уровень боевого пропуска, чтобы открыть экипировку
                  рокерши Риан и лидера автоботов Оптимуса Прайма. Позже в этом
                  сезоне обладателей боевого пропуска встретит большой любитель
                  отдыха, Тропический Мяускул! Опыт для боевого пропуска можно
                  заработать в «Королевской битве» и «Нулевой высоте». Но знали
                  ли вы, что очки опыта также можно получить в некоторых играх
                  творческого режима? Авторские игры, которые приносят очки
                  опыта, отмечены соответствующим значком в их описании в меню
                  «Поиск». Играйте так, как нравится вам, и откройте Риан,
                  Оптимуса Прайма и других героев!
                </p>
              )}
              <button className="show-more" onClick={toggleShowMore}>
                {showMore ? "Скрыть" : "Показать больше"}
              </button>

              <div className="product-details-genres">
                <div>
                  <h6>Жанры</h6>
                  <p>Shooter</p>
                </div>
                <div>
                  <h6>Особенности</h6>
                  <p>Cooperative</p>
                </div>
              </div>
            </div>
            <div className="product-details-right">
              <div className="product-logo-block">
                <img
                  src="https://cdn2.unrealengine.com/24br-s24-egs-launcher-logo-350x100-350x100-b63249f937d9.png?h=270&quality=medium&resize=1&w=480"
                  alt=""
                  className="product-logo"
                />
              </div>
              <div className="under-logo__block">
                <p className="price">Бесплатно</p>
                <div className="base-game">Базовая игра</div>
              </div>

              {currentUser === oneProduct?.owner_email ? (
                <>
                  <Button
                    variant="primary w-100 p-2 mt-3"
                    onClick={() => navigate(`/editproduct/${oneProduct.id}`)}
                  >
                    Редактировать продукт
                  </Button>
                  <Button
                    variant="danger
               w-100 p-2 mt-3"
                    onClick={() => deleteProduct(oneProduct.id)}
                  >
                    Удалить Продукт
                  </Button>
                </>
              ) : null}

              {currentUser ? (
                <>
                  <Button variant="warning w-100 p-2 mt-3">Получить</Button>
                  <Button
                    className="outlined-btn"
                    variant="outline-light p-2 w-100 mt-3"
                  >
                    Добавить в корзину
                  </Button>
                  <Button
                    className="outlined-btn"
                    variant="outline-light w-100 mt-3 p-1"
                  >
                    <img width={20} src={addTo} alt="" /> В список желаемого
                  </Button>
                </>
              ) : null}

              <ul className="product-details__more-about-product-list">
                <li>
                  <h6>Разработчик</h6>
                  <p>Epic Games</p>
                </li>

                <li>
                  <h6>Издатель</h6>
                  <p>Epic Games</p>
                </li>
                <li>
                  <h6>Дата выхода</h6>
                  <p>21.07.17</p>
                </li>
                <li>
                  <h6>Изначальный выпуск</h6>
                  <p>21.07.17</p>
                </li>
                <li>
                  <h6>Платформа</h6>
                  <img src="" alt="" />
                </li>
              </ul>
              <div className="btn-share__box">
                <Button
                  className="outlined-btn"
                  variant="outline-light w-100 mt-3"
                >
                  <img width={20} src={shareIcon} alt="" /> Поделиться
                </Button>

                {currentUser ? (
                  <Button
                    className="outlined-btn"
                    variant="outline-light w-100 mt-3"
                  >
                    <img width={20} src={reportIcon} alt="" /> Пожаловаться
                  </Button>
                ) : null}
              </div>
            </div>
          </section>
          <section className="product-details__section2">
            <div className="product-details-links__block">
              <h5>Подпишитесь на нас</h5>
              <div className="product-details-links">
                <UnrealEngineIcon />
                <UnrealEngineIcon />
                <UnrealEngineIcon />
              </div>
            </div>

            <div className="product-details__raiting">
              <h5>Оценки игроков в Epic</h5>
              <p>На основе отзывов игроков в экосистеме Epic Games</p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h4>4.3</h4>
              </div>
            </div>

            <div className="product-details__reviews-block">
              <h5>Рейтинги</h5>
              <div className="reviews">
                <div className="one-review">
                  <div className="about-user">
                    <h6>GamesRadar+</h6>
                    <p>Автор: Ford James</p>
                  </div>
                  <div className="stars"></div>
                  <p className="descr">
                    Nobody thought Fortnite would still be popular this late on,
                    but it's continued to adapt and fight for its spot at the
                    top of the battle royale ladder.
                  </p>
                </div>
                <div className="one-review">
                  <div className="about-user">
                    <h6>GamesRadar+</h6>
                    <p>Автор: Ford James</p>
                  </div>
                  <div className="stars"></div>
                  <p className="descr">
                    Nobody thought Fortnite would still be popular this late on,
                    but it's continued to adapt and fight for its spot at the
                    top of the battle royale ladder.
                  </p>
                </div>
                <div className="one-review">
                  <div className="about-user">
                    <h6>GamesRadar+</h6>
                    <p>Автор: Ford James</p>
                  </div>
                  <div className="stars"></div>
                  <p className="descr">
                    Nobody thought Fortnite would still be popular this late on,
                    but it's continued to adapt and fight for its spot at the
                    top of the battle royale ladder.
                  </p>
                </div>
              </div>
              <Button variant="secondary">Посмотреть все отзывы</Button>
            </div>

            <div className="system-requirements__block">
              <h5>Системные требования</h5>
              <div className="system-requirements">
                <h4>Windows</h4>
                <div className="req">
                  <ul className="minimum">
                    <h5>Минимальные</h5>
                    <li>
                      <h6>OC</h6>
                      <p>Windows 10</p>
                    </li>
                    <li>
                      <h6>Процессор</h6>
                      <p>Core i3-3225 (3,3 ГГц)</p>
                    </li>
                    <li>
                      <h6>Оперативная память</h6>
                      <p>8 ГБ ОЗУ</p>
                    </li>
                  </ul>

                  <ul className="recommendations">
                    <h5>Рекомендуется</h5>
                    <li>
                      <h6>ОС</h6>
                      <p>Windows 10</p>
                    </li>
                    <li>
                      <h6>Процессор</h6>
                      <p>Core i3-3225 (3,3 ГГц)</p>
                    </li>
                    <li>
                      <h6>Оперативная память</h6>
                      <p>8 ГБ ОЗУ</p>
                    </li>
                    <li>
                      <h6>Видеокарта</h6>
                      <p>
                        NVIDIA GTX 960, AMD R9 280 или эквивалентная с
                        поддержкой DirectX 11
                      </p>
                    </li>
                    <li>
                      <h6>Видеопамять</h6>
                      <p>2 ГБ видеопамяти</p>
                    </li>
                  </ul>
                </div>
                <p className="copyirights">
                  © Epic Games, Inc., 2022 г. Все права защищены. Epic, Epic
                  Games, логотип Epic Games, Unreal, Unreal Engine, логотип
                  Unreal Engine, Fortnite и логотип Fortnite являются товарными
                  знаками или зарегистрированными товарными знаками компании
                  Epic Games, Inc. в США и других странах. Все остальные
                  товарные знаки являются собственностью соответствующих
                  владельцев.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
