import React from "react";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <div className='cartTotals'>
      <div>
        <article>
          <h5>
            Subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            Shipping Fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Order Total :{" "}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            Checkout
          </Link>
        ) : (
          <button onClick={loginWithRedirect} className='btn' type='button'>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotals;
