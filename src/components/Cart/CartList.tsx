import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import CartItem from "./CartItem";

const CartList = () => {
	const {products} = useAppSelector(state => state.cart)

	const uniqProducts = products.filter((item, ind) => products.indexOf(item) === ind)

  return (
    <div className="container mx-auto">
      {uniqProducts.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          image={item.image}
          price={item.price}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default CartList;
