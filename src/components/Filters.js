import React from "react";
import { useFilterContext } from "../context/filter_context";
import { getUniqueVelues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueVelues(all_products, "category");
  const companies = getUniqueVelues(all_products, "company");
  const colors = getUniqueVelues(all_products, "colors");

  return (
    <div className='filters'>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>
          <div className='form-control'>
            <h5>Category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    className={`${
                      c.toLowerCase() === category ? "active" : null
                    }`}
                    onClick={updateFilters}
                    name='category'
                    type='button'
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          <div className='form-control'>
            <h5>Company</h5>
            <select
              name='company'
              value={company}
              onChange={updateFilters}
              className='company'
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='form-control'>
            <h5>Colors</h5>
            <div className='colors'>
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name='color'
                      data-color='all'
                      onClick={updateFilters}
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name='color'
                    data-color={c}
                    style={{ background: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className='form-control'>
            <h5>Price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          <div className='form-control shipping'>
            <label htmlFor='shipping'>Free Shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              onClick={updateFilters}
              checked={shipping}
            />
          </div>
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
