import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className='featured section'>
      <div className='title'>
        <h2>Featured Products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
