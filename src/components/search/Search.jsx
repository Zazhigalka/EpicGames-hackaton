import React from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./Search.css";
import search_icon from "../../assets/search.png";

const Search = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <div className="search__input_group">
          <FormControl className="search__input" />
        </div>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Search;
