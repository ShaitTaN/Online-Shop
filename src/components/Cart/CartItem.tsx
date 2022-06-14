import React, { FC } from "react";
import { IProduct } from "../../models/IProduct";

const CartItem:FC<IProduct> = (props) => {
  return (
    <div className="flex h-[350px] p-5 items-center justify-around rounded-2xl shadow-md my-4 relative flex-col sm:flex-row sm:h-[150px]">
      <img
        className="sm:h-full h-[150px] sm:w-auto w-[100px]"
        src={props.image}
      />
      <p className="w-[300px]">{props.title}</p>
      <span>{props.price} $</span>
      <div className="flex items-center">
        <div className="border-solid border-[1px] border-gray-500 rounded-full cursor-pointer w-[40px] h-[40px] flex items-center justify-center p-2 hover:bg-gray-500">
          <img src="./assets/icons/plus.svg" />
        </div>
        <div className="mx-4">1</div>
        <div className="border-solid border-[1px] border-gray-500 rounded-full cursor-pointer w-[40px] h-[40px] flex items-center justify-center p-2 hover:bg-gray-500">
          <img src="./assets/icons/minus.svg" />
        </div>
      </div>
      <div className="absolute right-2 top-2 cursor-pointer hover:font-bold">
        X
      </div>
    </div>
  );
};

export default CartItem;
