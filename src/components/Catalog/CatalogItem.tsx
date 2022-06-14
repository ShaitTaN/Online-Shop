import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { IProduct } from "../../models/IProduct";
import { cartSlice } from "../../store/reducers/Cart";

const CatalogItem:FC<IProduct> = (props) => {
	const {addToCart} = cartSlice.actions
	const dispatch = useAppDispatch()
	const {products} = useAppSelector(state => state.cart)

	const add = (product: IProduct) => {
		dispatch(addToCart(product))
	}

	const count = products.filter(item => item.id === props.id).length

  return (
    <div className="catalog__cards-item">
			{!!count && <div className="absolute right-4 top-2 flex justify-center items-center text-xs w-[20px] h-[20px] rounded-full bg-red-400">{count}</div>}
      <span className="text-right text-green-800">{props.price} $</span>
      <img className="h-[200px]" src={props.image} />
      <p className="text-center uppercase my-4">{props.title.substring(0, 20) + '...'}</p>
      <div onClick={() => add(props)} className="catalog__cards-btn">В корзину</div>
    </div>
  );
};

export default CatalogItem;
