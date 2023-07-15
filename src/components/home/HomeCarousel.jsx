import React, { useEffect, useState } from "react";
import "./homeCarousel.css";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import addIcon from "../../assets/add-to.png";

const HomeCarousel = () => {
  const navigate = useNavigate();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [progressIndex, setProgressIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  const carouselItems = [
    {
      imgSrc:
        "https://cdn2.unrealengine.com/egs-spider-man-miles-morales-carousel-thumb-1200x1600-b7c0fb2da84b.jpg?h=128&quality=medium&resize=1&w=96",
      title: "MARVEL: Spider-man",
    },
    {
      imgSrc:
        "https://cdn2.unrealengine.com/egs-ac-mirage-carousel-thumb-1200x1600-c884e5dc38af.jpg?h=128&quality=medium&resize=1&w=96",
      title: "Assassins's Creed: Мираж",
    },
    {
      imgSrc:
        "https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/oyun/0016-fortnite-1000x1000.webp",
      title: "Fortnite: Battle Royal",
    },
    {
      imgSrc:
        "https://i.etsystatic.com/13367669/r/il/013579/3107621028/il_570xN.3107621028_hfi8.jpg",
      title: "GRAND THEFT AUTO V",
    },
    {
      imgSrc:
        "https://cdn2.unrealengine.com/fc24set-epic-portrait-product-image-1200x1600-1200x1600-dfe2373ee736.jpg?h=128&quality=medium&resize=1&w=96",
      title: "EA SPORTS FC 24",
    },
    {
      imgSrc:
        "https://cdn2.unrealengine.com/1200x1600-with-logo-1200x1600-6480a248c498.jpg?h=128&quality=medium&resize=1&w=96",
      title: "NARAKA: BLADEPOINT",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex(
        (prevIndex) => (prevIndex + 1) % carouselItems.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgressIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % carouselItems.length;
        setProgressWidth(0);
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progressWidth >= 100) {
      setProgressWidth(0);
    }
  }, [progressWidth]);

  const handleSlideClick = (index) => {
    setProgressWidth(0);
    setActiveSlideIndex(index);
  };

  return (
    <div className="home__carousel">
      <div
        className="home__carousel_left"
        onClick={() => handleSlideClick(activeSlideIndex)}
      >
        <Carousel
          controls={false}
          indicators={false}
          activeIndex={activeSlideIndex}
        >
          <Carousel.Item>
            <img
              className="carousel__left_image d-block w-100"
              src="https://cdn2.unrealengine.com/egs-spider-man-miles-morales-carousel-desktop-1248x702-0cbd7e91abd2.jpg?h=720&quality=medium&resize=1&w=1280"
              alt="Spider-Man"
            />
            <Carousel.Caption className="carousel__left_descr">
              <img
                src="https://cdn2.unrealengine.com/egs-marvelsspidermanmilesmorales-insomniacgamesnixxessoftware-ic1-400x400-32513a3f95a0.png?h=270&quality=medium&resize=1&w=480"
                className="carousel__left_descr-img"
                alt=""
              />
              <p className="left__descr">
                Когда его дому грозит страшная опасность, Майлз надевает костюм
                и становится Человеком-Пауком.
              </p>
              <p>
                От <span style={{ fontWeight: 600 }}>39,99$</span>
              </p>
              <div className="left__descr_bottom">
                <button>Добавить в Корзину</button>
                <div className="home__wish">
                  <img src={addIcon} alt="" />
                  <p>В список желаемого</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__left_image d-block w-100"
              src="https://cdn2.unrealengine.com/egs-ac-mirage-carousel-desktop-1920x1080-b74b6e380b4d.jpg?h=720&quality=medium&resize=1&w=1280"
              alt="Second slide"
            />
            <Carousel.Caption className="carousel__left_descr">
              <img
                src="https://cdn2.unrealengine.com/epic-launch-logo-400x172-c0289bc57588.png?h=270&quality=medium&resize=1&w=480"
                alt=""
                className="carousel__left_descr-img"
                style={{
                  height: "120px",
                  width: "240px",
                  bottom: "105%",
                  left: "5%",
                }}
              />
              <p className="left__descr">
                Узнайте историю Басима, хитрого вора, который устремился на
                оживлённые улицы Багдада IX века в поисках ответов и
                справедливости.
              </p>
              <p>
                От <span style={{ fontWeight: 600 }}>39,99$</span>
              </p>
              <div className="left__descr_bottom">
                <button>Добавить в Корзину</button>
                <div className="home__wish">
                  <img src={addIcon} alt="" />
                  <p>В список желаемого</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__left_image d-block w-100"
              src="https://cdnb.artstation.com/p/assets/images/images/006/737/939/large/vitaliy-naymushin-fortnite-keyart-final.jpg?1500907440"
              alt="Third slide"
              style={{ opacity: 0.8 }}
            />
            <Carousel.Caption className="carousel__left_descr">
              <img
                src="https://cdn2.unrealengine.com/24br-s24-egs-launcher-logo-350x100-350x100-b63249f937d9.png?h=270&quality=medium&resize=1&w=480"
                alt=""
                className="carousel__left_descr-img"
                style={{ width: "340px", height: "100px", bottom: "100%" }}
              />
              <p className="left__descr">
                Собирайте друзей и отправляйтесь в игру Fortnite от Epic Games,
                в которой вас ждёт грандиозная битва для 100 игроков.
              </p>
              <p>
                <span style={{ fontWeight: 600 }}>Бесплатно</span>
              </p>
              <div className="left__descr_bottom">
                <button>Добавить в Корзину</button>
                <div className="home__wish">
                  <img src={addIcon} alt="" />
                  <p>В список желаемого</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__left_image d-block w-100"
              src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg"
              alt="Third slide"
              style={{ opacity: 0.7 }}
            />
            <Carousel.Caption
              className="carousel__left_descr"
              style={{ width: "500px", marginBottom: "10px" }}
            >
              <h3>Grand Theft Auto V</h3>
              <p className="left__descr">
                Premium Издание всемирно-известной игры.
              </p>
              <p>
                От <span style={{ fontWeight: 600 }}>39,99$</span>
              </p>
              <div className="left__descr_bottom">
                <button>Добавить в Корзину</button>
                <div className="home__wish">
                  <img src={addIcon} alt="" />
                  <p>В список желаемого</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__left_image d-block w-100"
              src="https://mms.businesswire.com/media/20230713426786/en/1840766/5/FC24_standardkeyart_16x9.jpg"
              alt="Third slide"
            />
            <Carousel.Caption
              className="carousel__left_descr"
              style={{ width: " 80%" }}
            >
              <h3 style={{ display: "none" }}>EA SPORTS FC</h3>
              <p className="left__descr" style={{ height: "40px" }}>
                EA SPORTS FC - это следующая часть всемирной игры.
              </p>
              <p>
                От <span style={{ fontWeight: 600 }}>69,99$</span>
              </p>
              <div className="left__descr_bottom">
                <button>Добавить в Корзину</button>
                <div className="home__wish">
                  <img src={addIcon} alt="" />
                  <p>В список желаемого</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel__left_image d-block w-100"
              src="https://cdn2.unrealengine.com/epic-featured-carousel-image-1920x1080-1920x1080-8c2394ed0c91.jpg?h=720&quality=medium&resize=1&w=1280"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel__left_descr">
              <h3 style={{ display: "none" }}>NARAKA: BLADEPOINT</h3>
              <p className="left__descr">
                Предайтесь легендам Дальнего Востока в игре NARAKA: BLADEPOINT,
                неповторимой королевской битве в с рукопашными боями.
              </p>
              <p>
                <span style={{ fontWeight: 600 }}>Бесплатно</span>
              </p>
              <div className="left__descr_bottom">
                <button>Добавить в корзину</button>
                <div className="home__wish">
                  <img src={addIcon} alt="" />
                  <p>В список желаемого</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <ul className="home__carousel_right">
        {carouselItems.map((item, index) => (
          <li
            className={`carousel__right_items ${
              activeSlideIndex === index ? "yea active" : ""
            }`}
            key={index}
            onClick={() => handleSlideClick(index)}
          >
            <img src={item.imgSrc} alt="" className="carousel__right_img" />
            <p className="carousel__right_title">{item.title}</p>
            <div className={activeSlideIndex === index ? "filled" : ""}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeCarousel;
