import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div className='listView'>
      {products.map((product) => {
        return (
          <article key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <h4>{product.name}</h4>
              <h5 className='price'>{formatPrice(product.price)}</h5>
              <p>{product.description.substring(0, 150)}...</p>
              <Link to={`/products/${product.id}`} className='btn'>
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView;
