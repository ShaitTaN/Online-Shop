import React from "react";
import { Link } from "react-router-dom";
import CartList from "../components/Cart/CartList";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { cartSlice } from "../store/reducers/CartSlice";

const Cart = () => {
	const dispatch = useAppDispatch()
  const { products } = useAppSelector((state) => state.cart);
	const {payForProducts} = cartSlice.actions

  const total = products.reduce((tot, item) => item.price + tot, 0);

	const pay = () => {
		dispatch(payForProducts())
	}

  return (
    <div className="my-5 container mx-auto">
      <CartList />
      {products.length > 0 ? (
        <>
          <div className="mb-2 text-right border-b border-solid border-gray-500">
            Итого: {total.toFixed(2)} $
          </div>
          <Link onClick={pay} to='/pay' className="block cursor-pointer w-full text-center p-4 bg-slate-400 hover:bg-slate-500">Оплатить</Link>
        </>
      ) : (
        <h2 className="text-2xl text-center">В корзине пусто</h2>
      )}
    </div>
  );
};

export default Cart;
