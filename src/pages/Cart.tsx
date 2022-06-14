import React from "react";
import CartList from "../components/Cart/CartList";
import { useAppSelector } from "../hooks/hooks";

const Cart = () => {
  const { products } = useAppSelector((state) => state.cart);

  const total = products.reduce((tot, item) => item.price + tot, 0);

  return (
    <div className="my-5 container mx-auto">
      <CartList />
      {products.length > 0 ? (
        <>
          <div className="text-right border-b border-solid border-gray-500">
            Итого: {total.toFixed(2)} $
          </div>
          <div>Оплатить</div>
        </>
      ) : (
        <h2 className="text-2xl text-center">В корзине пусто</h2>
      )}
    </div>
  );
};

export default Cart;
