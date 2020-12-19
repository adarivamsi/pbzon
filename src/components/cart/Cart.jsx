import React from "react";
import "./Cart.css";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

function Cart({ cartItems }) {
  return (
    <div className="Cart">
      <CartItems items={cartItems} />
      <CartTotal items={cartItems} />
    </div>
  );
}

export default Cart;
