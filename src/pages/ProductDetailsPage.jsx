import React from 'react';
import ProductDetails from '../components/productdetails/ProductDetails';
import Search from '../components/search/Search';

const ProductDetailsPage = () => {
  return (
    <>
      {/* <div
        style={{
          position: 'fixed',
          left: '0',
          right: '0',
        }}>
        <Search style={{ backgroundColor: '#121212' }} />
      </div> */}
      <ProductDetails />
    </>
  );
};

export default ProductDetailsPage;
