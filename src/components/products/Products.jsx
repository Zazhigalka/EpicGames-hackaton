import React from "react";
import "./products.css";
import ProductCard from "../prodcutCard/ProductCard";
import Filter from "../filters/Filter";

const Products = () => {
  return (
    <div className="products__container">
      <div className="products__catalog">
        <p className="products__catalog_filter">
          <span
            style={{
              fontSize: "15px",
              lineHeight: "20px",
              letterSpacing: "0.2px",
              color: "#f5f5f599",
              marginRight: "10px",
            }}
          >
            Показать :
          </span>
          <select className="select">
            <option className="options">Все</option>
            <option className="options" value="">
              Новинка
            </option>
            <option className="options" value="">
              Скоро появится
            </option>
            <option className="options" value="">
              По алфавиту
            </option>
            <option className="options" value="">
              Цена: По возрастанию
            </option>
            <option className="options" value="">
              Цена: По убыванию
            </option>
          </select>
        </p>
        <div className="all__products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="products__filter">
        <Filter />
      </div>
    </div>
  );
};

export default Products;
