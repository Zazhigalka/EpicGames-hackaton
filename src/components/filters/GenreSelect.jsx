import React from "react";
import { Form } from "react-bootstrap";
import "./genreSelect.css";

const GenreSelect = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>Жанр</option>
      <option value="1">Выживание</option>
      <option value="2">Головоломка</option>
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
