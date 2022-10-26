import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const Cart = () => {
  const { cart } = useCartContext;
  if (cart.length < 1) {
    return (
      <div className='cart page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            Fill It
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className='cart'>
      <PageHero title='cart' />
      <div className='page'>
        <CartContent />
      </div>
    </div>
  );
};

export default Cart;
