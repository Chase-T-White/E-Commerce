import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <div className='grid-view'>
      <div className='products-container'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
