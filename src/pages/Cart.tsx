import React from "react";
import CartList from "../components/Cart/CartList";
import { useAppSelector } from "../hooks/hooks";

const Cart = () => {
  const { products } = useAppSelector((state) => state.cart);
  return (
    <div className="my-5">
      <CartList />
      {products.length > 0 ? (
        <div className="container mx-auto text-right border-b border-solid border-gray-500">
          Итого: 0 $
        </div>
      ) : (
        <h2 className="text-2xl text-center">В корзине пусто</h2>
      )}
    </div>
  );
};

export default Cart;
