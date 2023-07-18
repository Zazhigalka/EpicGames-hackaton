import React, { useEffect } from "react";
import "./products.css";
import ProductCard from "../prodcutCard/ProductCard";
import Filter from "../filters/Filter";
import Search from "../search/Search";
import { useProduct } from "../../contexts/ProductContextProvider";

const Products = () => {
  const { getProducts, products } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="products__container">
      <div
        style={{
          position: "sticky",
          top: "0px",
          left: "0",
          right: "0",
          zIndex: 6,
        }}
      >
        <Search />
      </div>
      <div className="products__inner">
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
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="products__filter">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Products;
