import React from 'react';
import { Container } from 'react-bootstrap';
import './footer.css';
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#333', color: '#e7e7e7' }}>
      <Container>
        <div>
          <div className="links-box">
            <FacebookIcon className="icon" />
            <TwitterIcon className="icon" />
            <YoutubeIcon className="icon" />
          </div>
          <div className="scroll"></div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
