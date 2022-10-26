import React from "react";
import { Filters, ProductList, Sort, PageHero } from "../components";

const Products = () => {
  return (
    <main>
      <PageHero title='products' />
      <div className='page'>
        <div className='section-center products'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
