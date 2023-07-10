import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
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
            <FacebookIcon className="icon" />
            <TwitterIcon className="icon" />
            <YoutubeIcon className="icon" />
          </div>
          <div>
            <UpBtnIcon className="up-btn" onClick={scrollToTop} />
          </div>
        </div>

        <div className="section-2">
          <h4>Resources</h4>

          <div className="list-box">
            <ul className="footer-list">
              <li>
                <a href="#">Support-A-Creator</a>{' '}
              </li>
              <li>
                <a href="#">Destribite on Epic Games</a>{' '}
              </li>
              <li>
                <a href="#">Careers</a>{' '}
              </li>
              <li>
                <a href="#">Company</a>{' '}
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <a href="#">Fan Art Policy</a>
              </li>
              <li>
                <a href="#">UX Research</a>
              </li>
              <li>
                <a href="#">Store EULA</a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <a href="#">Online Services</a>
              </li>
              <li>
                <a href="#">Community Rules</a>
              </li>
              <li>
                <a href="#">Epic Newsroom</a>
              </li>
            </ul>
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
            © 2023, Epic Games, Inc. All rights reserved. Epic, Epic Games, the
            Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine,
            the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament
            logo are trademarks or registered trademarks of Epic Games, Inc. in
            the United States of America and elsewhere. Other brands or product
            names are the trademarks of their respective owners.
          </p>
        </div>

        <div className="section-3">
          <ul style={{ display: 'flex', gap: '0.7em', padding: '0' }}>
            <li>
              <a href="#">Terms of Service</a>{' '}
            </li>
            <li>
              <a href="#">Privacy Policy</a>{' '}
            </li>
            <li>
              <a href="#">Store Refund Policy</a>{' '}
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
