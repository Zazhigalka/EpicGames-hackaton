import React, { useEffect, useState } from "react";
import "./homeCarousel.css";
import "./homeCarouselAdaptive.css";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import addIcon from "../../assets/add-to.png";

const HomeCarousel = () => {
  const navigate = useNavigate();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [progressIndex, setProgressIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [iconPlus, setIconPlus] = useState(false);

  const handleMouseEnter = () => {
    setIconPlus(true);
  };

  const handleMouseLeave = () => {
    setIconPlus(false);
  };

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
        "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360",
      title: "GRAND THEFT AUTO V",
    },
    {
      imgSrc:
        "https://cdn2.unrealengine.com/fc24set-epic-portrait-product-image-1200x1600-1200x1600-dfe2373ee736.jpg?h=128&quality=medium&resize=1&w=96",
      title: "EA SPORTS FC™ 24",
    },
    {
      imgSrc:
        "https://cdn1.epicgames.com/undefined/offer/batman-arkham-knight_portrait-1024x1152-78f19e73d3e889c19ca24ab5af0b5fd7.jpg?h=480&quality=medium&resize=1&w=360",
      title: " Batman™: Arkham Knight",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex(
        (prevIndex) => (prevIndex + 1) % carouselItems.length
      );
      setProgressWidth(0);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeSlideIndex]);

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
    setActiveSlideIndex(index);
    setProgressWidth(100);
  };

  // adaptive
  const adaptive = [
    {
      imgSrc:
        "https://cdn2.unrealengine.com/fc24set-epic-portrait-product-image-1200x1600-1200x1600-dfe2373ee736.jpg?h=854&quality=medium&resize=1&w=640",
      title: "EA SPORTS FC 24",
      descr: "EA SPORTS FC™ — это следующая глава всемирной игры.",
      price: "От 69,99 $",
    },
    {
      imgSrc:
        "https://cdn2.unrealengine.com/egs-spider-man-miles-morales-carousel-mobile-1200x1600-8ba08ab71c0e.jpg?h=854&quality=medium&resize=1&w=640",
      title: "Spider Man: Miles Morales",
      descr:
        "Когда его дому грозит страшная опасность, Майлз надевает костюм и становится Человеком-Пауком.",
      price: "От 39,99 $",
    },
    {
      imgSrc:
        "https://image.api.playstation.com/vulcan/ap/rnd/202208/1718/NFf86jgU4AeVYgJBEoEKBpxW.jpg",
      title: "",
      descr:
        "Узнайте историю Басима, хитрого вора, который устремился наоживлённые улицы Багдада IX века в поисках ответов и      справедливости.",
      price: "От 39,99 $",
    },
    {
      imgSrc: "https://i.ebayimg.com/images/g/3a8AAOSwmetgbgeq/s-l1600.jpg",
      title: "",
      descr:
        "Собирайте друзей и отправляйтесь в игру Fortnite от Epic Games, в которой вас ждёт грандиозная битва для 100 игроков.",
      price: "Бесплатно",
    },
    {
      imgSrc: "https://i.ebayimg.com/images/g/gXoAAOSwgn1dWpwt/s-l1200.jpg",
      title: "",
      descr: "Premium Издание всемирно-известной игры.",
      price: "От 24,99 $",
    },
    {
      imgSrc:
        "https://myhotposters.com/cdn/shop/products/mHP0456_1024x1024.jpeg?v=1571444323",
      title: "",
      descr:
        "Batman™: Arkham Knight — это эпичное завершение признанной критиками трилогии Arkham компании Rocksteady Studios.",
      price: "От 19,99 $",
    },
  ];

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
                className="carousel__left_descr-img-1"
                alt="Spider Man"
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
                alt="AC Mirage"
                className="carousel__left_descr-img-2"
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
              alt="Fortnite"
              style={{ opacity: 0.8 }}
            />
            <Carousel.Caption className="carousel__left_descr">
              <img
                src="https://cdn2.unrealengine.com/24br-s24-egs-launcher-logo-350x100-350x100-b63249f937d9.png?h=270&quality=medium&resize=1&w=480"
                alt="Fortnite"
                className="carousel__left_descr-img-3"
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
              alt="GTA V"
              style={{ opacity: 0.7 }}
            />
            <Carousel.Caption
              className="carousel__left_descr"
              style={{ width: "500px", marginBottom: "10px" }}
            >
              <h3
                style={{
                  animation: "anime 1s forwards",
                }}
              >
                Grand Theft Auto V
              </h3>
              <p className="left__descr">
                Premium Издание всемирно-известной игры.
              </p>
              <p>
                От <span style={{ fontWeight: 600 }}>24,99$</span>
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
              alt="EA SPORTS FC"
            />
            <Carousel.Caption
              className="carousel__left_descr"
              style={{ width: " 80%" }}
            >
              <h3 style={{ display: "none" }}>EA SPORTS FC</h3>
              <p className="left__descr ea-sports" style={{ height: "50px" }}>
                EA SPORTS FC™ 24 - это следующая часть всемирной игры.
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
              src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_G1_1920x1080_19_0911-1920x1080-1d69e15f00cb5ab57249f208f1f8f45d52cbbc59.jpg"
              alt="Batman"
              style={{ opacity: 0.6 }}
            />
            <Carousel.Caption className="carousel__left_descr">
              <img
                src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-knight%2FEGS_WB_Batman_Arkham_Knight_IC1_200x200_19_0911-200x200-9d884a41a7b8c6ca1ec20026cf39038b6ffddc2f.png?h=270&quality=medium&resize=1&w=480"
                alt=""
                className="carousel__left_descr-img-4"
              />
              <p className="left__descr">
                Batman™: Arkham Knight — это эпичное завершение признанной
                критиками трилогии Arkham компании Rocksteady Studios.
              </p>
              <p>
                От <span style={{ fontWeight: 600 }}>19,99 $</span>
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
      <div className="home__adapt_carousel">
        <Carousel>
          {adaptive.map((item) => (
            <Carousel.Item
              interval={5000}
              style={{ position: "relative" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="home__adapt_img"
                src={item.imgSrc}
                alt="Ea Sports FC "
              />
              {iconPlus ? (
                <img
                  src={addIcon}
                  alt=""
                  className="home__adapt_add"
                  title="В список желания"
                />
              ) : null}

              <Carousel.Caption className="home__adapt_descr">
                <p className="home__adapt_title">{item.title}</p>
                <p className="home__adapt_description">{item.descr}</p>
                <p className="home__adapt_price">{item.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarousel;
