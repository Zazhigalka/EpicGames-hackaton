import React, { useEffect, useState } from "react";
import "./products.css";
import ProductCard from "../prodcutCard/ProductCard";
import Filter from "../filters/Filter";
import Search from "../search/Search";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const Products = () => {
  const { getProducts, products, pages, categoryFilter, searchFilter } =
    useProduct();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  function getPagesArr() {
    const pagesArr = [];
    for (let i = 1; i <= pages; i++) {
      pagesArr.push(i);
    }
    return pagesArr;
  }

  const handlePrev = () => {
    if (currentPage == 1) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage == pages) return;
    setCurrentPage(currentPage + 1);
  };

  const [searchParams, setSearchParams] = useSearchParams();

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
            {products.map((item) => {
              if (categoryFilter === "All") {
                return <ProductCard key={item.id} item={item} />;
              } else if (item.category === categoryFilter) {
                return <ProductCard key={item.id} item={item} />;
              }
            })}
          </div>
          <Pagination>
            <Pagination.Prev onClick={handlePrev} />
            {getPagesArr().map((item) =>
              currentPage === item ? (
                <Pagination.Item active key={item}>
                  {item}
                </Pagination.Item>
              ) : (
                <Pagination.Item
                  onClick={() => setCurrentPage(item)}
                  key={item}
                >
                  {item}
                </Pagination.Item>
              )
            )}

            <Pagination.Next onClick={handleNext} />
          </Pagination>
        </div>
        <div className="products__filter">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Products;
