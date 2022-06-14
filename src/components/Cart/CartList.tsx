import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { IProduct } from "../../models/IProduct";
import CartItem from "./CartItem";
import './cart.scss'

const CartList = () => {
  const { products } = useAppSelector((state) => state.cart);

  const uniqProducts = products?.reduce((result, item) => {
    if (!result.find((i) => i.id == item.id)) {
      result.push(item);
    }
    return result;
  }, [] as IProduct[]);

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
