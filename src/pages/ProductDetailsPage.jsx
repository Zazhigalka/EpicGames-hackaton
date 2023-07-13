import React from 'react';
import ProductDetails from '../components/productdetails/ProductDetails';
import Search from '../components/search/Search';

const ProductDetailsPage = () => {
  return (
    <>
      {/* <div
        style={{
          position: 'sticky',
          left: '0',
          right: '0',
          top: '0',
        }}>
        <Search />
      </div> */}
      <ProductDetails />
    </>
  );
};

export default ProductDetailsPage;
