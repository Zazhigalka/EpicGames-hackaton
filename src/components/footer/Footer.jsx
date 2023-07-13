import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import './Footer-adaptive-styles.css';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as TelegramIcon } from '../../assets/telegram.svg';
import { ReactComponent as UpBtnIcon } from '../../assets/up-btn.svg';
import { ReactComponent as EpicGamesIcon } from '../../assets/epicGames.svg';
import { ReactComponent as UnrealEngineIcon } from '../../assets/unrealEngine.svg';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer style={{ backgroundColor: '#202020', marginBottom: '0' }}>
      <Container>
        <div className="section-1">
          <div className="links-box">
            <a href="https://www.facebook.com/epicgames">
              <FacebookIcon className="icon" />
            </a>
            <TelegramIcon className="icon icon-tg" />
            <a href="https://twitter.com/EpicGamesRU">
              <TwitterIcon className="icon" />
            </a>
            <a href="https://www.youtube.com/channel/UC5Qk8mWBwtMyEj7iQQYRk1A">
              <YoutubeIcon className="icon" />
            </a>
          </div>
          <div>
            <UpBtnIcon className="up-btn" onClick={scrollToTop} />
          </div>
        </div>

        <div className="section-2">
          <h4>Ресурсы</h4>

          <div className="list-box">
            <ul className="footer-list">
              <li>
                <a href="#">Поддержка автора</a>{' '}
              </li>
              <li>
                <a href="#">Опубликовать на Epic Games</a>{' '}
              </li>
              <li>
                <a href="#">Вакансии</a>{' '}
              </li>
              <li>
                <a href="#">Компания</a>{' '}
              </li>
              <br />
              <li>
                <a href="#">Правила для неофициальных материалов</a>
              </li>
              <li>
                <a href="#">Расследование пользевательского опыта</a>
              </li>
              <li>
                <a href="#">
                  Лицензионное соглашение с конечным пользователем магазина
                </a>
              </li>
              <br />
              <li>
                <a href="#">Сетевые службы</a>
              </li>
              <li>
                <a href="#">Правила сообщества</a>
              </li>
              <li>
                <a href="#">Epic Newsroom</a>
              </li>
            </ul>

            <ul className="footer-list"></ul>

            <ul className="footer-list"></ul>
          </div>
          <br />
          <br />
          <h4>Made By Epic Games</h4>
          <div className="list-box">
            <ul className="footer-list">
              <li>
                <a href="#">Battle Breakers</a>{' '}
              </li>
              <li>
                <a href="#">Fortnite</a>{' '}
              </li>
              <li>
                <a href="#">Infinity Blade</a>{' '}
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <a href="#">Robo Recall</a>
              </li>
              <li>
                <a href="#">Shadow Complex</a>
              </li>
              <li>
                <a href="#">Unreal Tournament</a>
              </li>
            </ul>
          </div>
        </div>

        <hr style={{ border: 'solid 1px #666' }} />

        <div className="footer-copyright__box">
          <p>
            © 2023, Epic Games, Inc. Все права сохранены. Epic, Epic Games,
            логотип Epic Games, Fortnite, логотип Fortnite, Unreal, Unreal
            Engine, логотип Unreal Engine, Unreal Tournament и логотип Unreal
            Tournament являются товарными знаками или зарегистрированными
            товарными знаками Epic Games, Inc. в США и во всём остальном мире.
            Все прочие марки и наименования продукции являются товарными знаками
            соответствующих владельцев.
          </p>
        </div>

        <div className="section-3">
          <ul
            className="footer__conf"
            style={{ display: 'flex', gap: '0.7em', padding: '0' }}>
            <li>
              <a href="#">Условия предоставления услуг</a>{' '}
            </li>
            <li>
              <a href="#">Политика конфиденциальности</a>{' '}
            </li>
            <li>
              <a href="#">Правила возврата магазина</a>{' '}
            </li>
          </ul>

          <ul style={{ display: 'flex', gap: '1em', padding: '0' }}>
            <li>
              <EpicGamesIcon className="icon-end" />
            </li>
            <li>
              <UnrealEngineIcon className="icon-end" />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
