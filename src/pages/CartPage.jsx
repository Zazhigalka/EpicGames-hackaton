import React from "react";
import Cart from "../components/cart/Cart";
import Search from "../components/search/Search";

const CartPage = () => {
  return (
    <>
      <div style={{ position: "sticky", top: "0px", left: "0", right: "0" }}>
        <Search />
      </div>
      <Cart />
    </>
  );
};

export default CartPage;
