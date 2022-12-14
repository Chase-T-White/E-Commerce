import React from "react";
import { PageHero, StripeCheckout } from "../components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>Your Cart is Empty</h2>
            <Link to='/products' className='btn'>
              Fill It
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
        <h1>Checkout Here</h1>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default Checkout;
