import React from "react";
import CartList from "../components/Cart/CartList";

const Cart = () => {
  return (
    <div className="my-5">
      <CartList />
      <div className="container mx-auto text-right border-b border-solid border-gray-500">
        Итого: 0 $
      </div>
    </div>
  );
};

export default Cart;
