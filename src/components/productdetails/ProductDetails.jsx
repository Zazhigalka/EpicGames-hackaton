import React from 'react';
import './ProductDetails.css';
import { Button } from 'react-bootstrap';
import CarouselBox from '../Carousel/CarouselBox';
import addTo from '../../assets/add-to.png';
import shareIcon from '../../assets/share.png';
import reportIcon from '../../assets/flag.png';
import { ReactComponent as UnrealEngineIcon } from '../../assets/unrealEngine.svg';
import Search from '../search/Search';

const ProductDetails = () => {
  return (
    <div style={{ backgroundColor: '#121212' }}>
      <div
        style={{
          position: 'sticky',
          left: '0',
          right: '0',
          top: '0',
          zIndex: '999',
        }}>
        <Search />
      </div>
      <div className="product-details-container">
        <div className="product-details-left">
          <h3>Fortnite</h3>
          <div className="product-details-rating__title">
            <div className="raiting-on-num">4.3</div>
          </div>
          <CarouselBox />
          <p
            style={{
              fontSize: '1.3em',
              color: '#f5f5f5',
              margin: '3em 0',
              width: '100%',
            }}>
            Собирайте друзей и отправляйтесь в игру Fortnite от Epic Games, в
            которой вас ждёт грандиозная битва для 100 игроков. В ней вам
            предстоит искать полезную добычу, добывать материалы, создавать
            предметы и отстреливаться от врагов. Всё вместе это делает каждый
            матч совершенно непредсказуемым, а с каждым новым сезоном игра
            становится ещё больше и интереснее.
          </p>

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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
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
                  but it's continued to adapt and fight for its spot at the top
                  of the battle royale ladder.
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
                  but it's continued to adapt and fight for its spot at the top
                  of the battle royale ladder.
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
                  but it's continued to adapt and fight for its spot at the top
                  of the battle royale ladder.
                </p>
              </div>
            </div>
            <Button variant="secondary">Посмотреть все отзывы</Button>
          </div>

          <div className="system-requirements__block">
            <h5>Системные требования</h5>
            <div className="system-requirements">
              <div className="minimum">
                <h5>Минимальные</h5>
                <div>
                  <h6>OC</h6>
                  <p>Windows 10</p>
                </div>
                <div>
                  <h6>Процессор</h6>
                  <p>Core i3-3225 (3,3 ГГц)</p>
                </div>
                <div>
                  <h6>Оперативная память</h6>
                  <p>8 ГБ ОЗУ</p>
                </div>
              </div>

              <div className="recommendations">
                <h5>Рекомендуется</h5>
                <div>
                  <h6>ОС</h6>
                  <p>Windows 10</p>
                </div>
                <div>
                  <h6>Процессор</h6>
                  <p>Core i3-3225 (3,3 ГГц)</p>
                </div>
                <div>
                  <h6>Оперативная память</h6>
                  <p>8 ГБ ОЗУ</p>
                </div>
                <div>
                  <h6>Видеокарта</h6>
                  <p>
                    NVIDIA GTX 960, AMD R9 280 или эквивалентная с поддержкой
                    DirectX 11
                  </p>
                </div>
                <div>
                  <h6>Видеопамять</h6>
                  <p>2 ГБ видеопамяти</p>
                </div>
              </div>
            </div>

            <p className="copyirights">
              © Epic Games, Inc., 2022 г. Все права защищены. Epic, Epic Games,
              логотип Epic Games, Unreal, Unreal Engine, логотип Unreal Engine,
              Fortnite и логотип Fortnite являются товарными знаками или
              зарегистрированными товарными знаками компании Epic Games, Inc. в
              США и других странах. Все остальные товарные знаки являются
              собственностью соответствующих владельцев.
            </p>
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
          <div className="base-game">Базовая игра</div>

          <Button variant="warning w-100 p-2 mt-3">Получить</Button>
          <Button
            className="outlined-btn"
            variant="outline-light p-2 w-100 mt-3">
            Добавить в корзину
          </Button>
          <Button
            className="outlined-btn"
            variant="outline-light w-100 mt-3 p-1">
            <img width={20} src={addTo} alt="" /> В список желаемого
          </Button>

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
          <Button className="outlined-btn" variant="outline-light w-100 mt-3">
            <img width={20} src={shareIcon} alt="" /> В список желаемого
          </Button>
          <Button className="outlined-btn" variant="outline-light w-100 mt-3">
            <img width={20} src={reportIcon} alt="" /> В список желаемого
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
