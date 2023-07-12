import React from "react";
import { Form } from "react-bootstrap";
import "./osobennosti.css";

const OsobennostiSelect = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>Особенности</option>
      <option value="1">Виртуальная реальность</option>
      <option value="2">Кооперативная</option>
      <option value="3">Кросс-платформенная</option>
      <option value="4">Многопользовательская</option>
      <option value="5">Одиночная</option>
      <option value="6">Соревновательная</option>
      <option value="7">Online Multiplayer</option>
      <option value="8">MMO</option>
    </Form.Select>
  );
};

export default OsobennostiSelect;
