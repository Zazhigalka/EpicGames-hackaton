import React from "react";
import { Form } from "react-bootstrap";
import "./genreSelect.css";
import { useProduct } from "../../contexts/ProductContextProvider";

const GenreSelect = () => {
  const { categoryFilter, setCategoryFilter } = useProduct();

  return (
    <Form.Select
      style={{ backgroundColor: "#121212", color: "white", marginTop: "1rem" }}
      aria-label="Default select example"
      onChange={(e) => setCategoryFilter(e.target.value)}
    >
      <option value="All">Все</option>

      <option value="Shooter">Шутеры</option>
      <option value="test">Головоломка</option>
      <option value="3">Гонки</option>
      <option value="4">Инди</option>
      <option value="5">Казуальная</option>
      <option value="6">От первого лица</option>
      <option value="7">Шутер</option>
      <option value="8">Экшен</option>
      <option value="9">Фэнтези</option>
      <option value="10">Хоррор</option>
      <option value="11">Файтинг</option>
      <option value="12">Стратегии</option>
      <option value="13">Спортивная</option>
      <option value="3">Приключение</option>
    </Form.Select>
  );
};

export default GenreSelect;
