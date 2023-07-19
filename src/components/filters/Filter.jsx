import React from "react";
import { Form } from "react-bootstrap";
import GenreSelect from "./GenreSelect";
import OsobennostiSelect from "./OsobennostiSelect";
import "./filter.css";

const Filter = () => {
  return (
    <div className="filter__container">
      <p className="filter__title">Фильтры</p>
      <div className="all__filters">
        <Form.Select
          style={{ backgroundColor: "#121212", color: "white" }}
          className="price__select"
        >
          <option>Цена</option>
          <option value="1">Бесплатно</option>
          <option value="2">Ниже 10,00 $</option>
          <option value="3">Ниже 20,00 $</option>
          <option value="4">Ниже 30,00 $</option>
          <option value="5">14,99 $ и выше</option>
        </Form.Select>
        <GenreSelect />
        {/* <OsobennostiSelect /> */}
      </div>
    </div>
  );
};

export default Filter;
