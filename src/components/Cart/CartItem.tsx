import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IProduct } from "../../models/IProduct";
import { cartSlice } from "../../store/reducers/CartSlice";

const CartItem:FC<IProduct> = (props) => {
	const dispatch = useAppDispatch()
	const {removeAllFromCart, addToCart, removeFromCart} = cartSlice.actions
	const { products } = useAppSelector((state) => state.cart);

	const count = products.filter(item => item.id === props.id).length

	const removeAll = (id: number) => {
		dispatch(removeAllFromCart(id))
	}
	const add = (product: IProduct) => {
		dispatch(addToCart(product))
	}
	const remove = (id: number) => {
		dispatch(removeFromCart(id))
	}

  return (
    <div className="cart__item">
      <img
        className="sm:h-full h-[150px] sm:w-[80px] w-[100px]"
        src={props.image}
      />
      <p className="w-[300px]">{props.title}</p>
      <span>{props.price} $</span>
      <div className="flex items-center">
        <div onClick={() => add(props)} className="cart__item-btn">
          <img src="./assets/icons/plus.svg" />
        </div>
        <div className="mx-4">{count}</div>
        <div onClick={() => remove(props.id)} className="cart__item-btn">
          <img src="./assets/icons/minus.svg" />
        </div>
      </div>
      <div onClick={() => removeAll(props.id)} className="cart__item-close">
        X
      </div>
    </div>
  );
};

export default CartItem;
