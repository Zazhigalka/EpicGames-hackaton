import React from 'react'
import "./News.css"

const News = () => {
  return (
    <div className="container__news">
        <div className="news">
            <div className="news__main">

            <h6 className="news__title">Новости Epic Games</h6>
            <img className="news__img" src="https://cdn2.unrealengine.com/cozy-sim-fae-farm-will-let-you-cultivate-crops-and-friendships-1920x1080-fcca16bc1fac.jpg" alt="" />
            <div className="news__text">
                <span className="news__span">Выращивайте урожай и дружбу в уютном симуляторе Fae Farm</span>
                <p className="news__p">Неторопливый совместный симулятор фермы: зовите в гости друзей, стройте участки и ищите приключения</p>
                <a className="news__a" href="">Подробнее</a>
            </div>
            <hr className="news__hr"/>
            <a className="news__products_a" href="">
            <div className="news__product">
              <img className="news__product_img" src="https://cdn2.unrealengine.com/naraka-bladepoint-goes-free-today-what-you-ll-get-and-how-to-get-it-4200x2300-bd186e60cfe1.png" alt="" />
              <div className="news__product_info">
              <span className="news__product_span">Сегодня игра NARAKA:BLADEPOINT становится бесплатной! Узнайте, что вы получите, и как это сделать.</span>
              <a className="news__product_a" href="">Подробнее</a>
              </div>
            </div>
            </a>
            </div>
        </div>
    </div>
  )
}

export default News