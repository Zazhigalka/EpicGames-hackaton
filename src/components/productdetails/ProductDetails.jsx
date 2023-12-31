import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import "./Product-Details-adaptive_styles.css";
import { Button, Form, InputGroup } from "react-bootstrap";
import CarouselBox from "../Carousel/CarouselBox";
import addTo from "../../assets/add-to.png";
import shareIcon from "../../assets/share.png";
import reportIcon from "../../assets/flag.png";
import { ReactComponent as UnrealEngineIcon } from "../../assets/unrealEngine.svg";
import Search from "../search/Search";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import { ReactComponent as LikeIcon } from "../../assets/heart.svg";
import { ReactComponent as StarIcon } from "../../assets/star.svg";
import moment from "moment/moment";
import RatingSlider from "../Carousel/RatingCarousel";

const ProductDetails = () => {
  const {
    getOneProduct,
    oneProduct,
    deleteProduct,

    toggleLike,
    toggleLikeDelete,

    addComment,
    deleteComment,

    addRating,
    getRatingData,
    ratingData,
  } = useProduct();

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
    getRatingData(id);
  }, [id]);

  const [showMore, setShowMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    setIsLiked(oneProduct?.is_liked);
    setTotalLikes(oneProduct?.likes_count);
  }, [oneProduct]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const [comment, setComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("body", comment);

    addComment(formData);
    setComment("");
  };

  const [hasRated, setHasRated] = useState(false);

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
              <h3>{oneProduct?.title_of_game}</h3>
              <div className="product-details-rating__title">
                <div className="raiting-on-num">
                  {oneProduct?.rating}
                  <div>
                    <StarIcon
                      className={
                        oneProduct?.rating >= 1
                          ? "logo__stars stars-active"
                          : "logo__stars"
                      }
                    />
                    <StarIcon
                      className={
                        oneProduct?.rating >= 2
                          ? "logo__stars stars-active"
                          : "logo__stars"
                      }
                    />
                    <StarIcon
                      className={
                        oneProduct?.rating >= 3
                          ? "logo__stars stars-active"
                          : "logo__stars"
                      }
                    />
                    <StarIcon
                      className={
                        oneProduct?.rating >= 4
                          ? "logo__stars stars-active"
                          : "logo__stars"
                      }
                    />
                    <StarIcon
                      className={
                        oneProduct?.rating >= 5
                          ? "logo__stars stars-active"
                          : "logo__stars"
                      }
                    />
                  </div>
                </div>
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
                {oneProduct?.short_description}
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
                  {oneProduct?.full_description}
                </p>
              )}
              <button className="show-more" onClick={toggleShowMore}>
                {showMore ? "Скрыть" : "Показать больше"}
              </button>

              <div className="product-details-genres">
                <div>
                  <h6>Жанры</h6>
                  <p>{oneProduct?.category}</p>
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
                  src={oneProduct?.game_logo}
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
                    variant="danger w-100 p-2 mt-3"
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
                  {isLiked ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        className="outlined-btn d-flex align-content-center justify-content-center"
                        variant="outline-light p-2 w-100 mt-3"
                        onClick={() =>
                          toggleLikeDelete(
                            oneProduct.id,
                            setIsLiked,
                            setTotalLikes
                          )
                        }
                      >
                        <div
                          style={{
                            width: "27%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <LikeIcon className="like-icon-active" />
                          Нравится
                        </div>
                      </Button>
                      <p style={{ color: "#f2f2f2", fontSize: "10px" }}>
                        (Понравилось {totalLikes} пользователям)
                      </p>
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        className="outlined-btn d-flex align-content-center justify-content-center"
                        variant="outline-light p-2 w-100 mt-3"
                        onClick={() =>
                          toggleLike(oneProduct.id, setIsLiked, setTotalLikes)
                        }
                      >
                        <div
                          style={{
                            width: "27%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <LikeIcon className="like-icon-unactive" />
                          Нравится
                        </div>
                      </Button>
                      <p style={{ color: "#f2f2f2", fontSize: "10px" }}>
                        (Понравилось {totalLikes} пользователям)
                      </p>
                    </div>
                  )}

                  <Button
                    className="outlined-btn"
                    variant="outline-light w-100 p-1"
                  >
                    <img width={20} src={addTo} alt="" /> В список желаемого
                  </Button>
                </>
              ) : null}

              <ul className="product-details__more-about-product-list">
                <li>
                  <h6>Разработчик</h6>
                  <p>{oneProduct?.name_of_developer}</p>
                </li>

                <li>
                  <h6>Издатель</h6>
                  <p>{oneProduct?.title_of_publisher}</p>
                </li>
                <li>
                  <h6>Дата выхода</h6>
                  <p>{oneProduct?.date_of_issue}</p>
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
              <p>
                На основе отзывов игроков в экосистеме Epic Games (оценили:
                {oneProduct?.marks_count})
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid #262626",
                  gap: "10px",
                  padding: "40px 0",
                }}
              >
                <h4>{oneProduct?.rating}</h4>
                <StarIcon
                  className={
                    oneProduct?.rating >= 1
                      ? "rait__stars stars-active"
                      : "rait__stars"
                  }
                />
                <StarIcon
                  className={
                    oneProduct?.rating >= 2
                      ? "rait__stars stars-active"
                      : "rait__stars"
                  }
                />
                <StarIcon
                  className={
                    oneProduct?.rating >= 3
                      ? "rait__stars stars-active"
                      : "rait__stars"
                  }
                />
                <StarIcon
                  className={
                    oneProduct?.rating >= 4
                      ? "rait__stars stars-active"
                      : "rait__stars"
                  }
                />
                <StarIcon
                  className={
                    oneProduct?.rating >= 5
                      ? "rait__stars stars-active"
                      : "rait__stars"
                  }
                />
              </div>
              {hasRated && ratingData?.mark ? (
                <p style={{ fontSize: "2em", textAlign: "center" }}>
                  Вы уже оценили! Ваша оценка: {ratingData?.mark}
                </p>
              ) : null}

              {!hasRated && currentUser && ratingData?.mark ? null : (
                <div>
                  <RatingSlider
                    id={id}
                    addRating={addRating}
                    setHasRated={setHasRated}
                  />
                </div>
              )}
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
            <div className="product-details__reviews-block">
              <h5>Комментарии</h5>

              <div className="reviews">
                {currentUser ? (
                  <InputGroup size="sm" className="mb-3 mt-3">
                    <Form.Control
                      className="comment_input"
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                    <Button
                      className="add-comment-btn"
                      onClick={handleAddComment}
                    >
                      Добавить комментарии
                    </Button>
                  </InputGroup>
                ) : null}
                {oneProduct?.comments.map((comment) => (
                  <div key={comment.id} className="one-review">
                    <div className="about-user">
                      <h6>{comment.owner_username}</h6>
                      <p>
                        Дата создания:
                        {moment(comment.created_at).format("DD/MM/YYYY")}
                      </p>
                      <p>
                        Время создания:
                        {moment(comment.created_at).format("hh:mm")}
                      </p>
                    </div>
                    <div className="stars"></div>
                    <p className="descr">{comment.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
