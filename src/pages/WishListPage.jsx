import React from "react";
import WishList from "../components/wishList/WishList";
import Search from "../components/search/Search";

const WishListPage = () => {
  return (
    <>
      <div style={{ position: "fixed", left: "0", right: "0" }}>
        <Search />
      </div>
      <WishList />
    </>
  );
};

export default WishListPage;
