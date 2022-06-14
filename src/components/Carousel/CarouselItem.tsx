import React, { FC } from "react";
import { IProduct } from "../../models/IProduct";

const CarouselItem: FC<IProduct> = ({price, image}) => {
  return (
    <div className="relative w-[310px] sm:w-[500px] flex items-center justify-center">
      <img className="h-full" src={image} draggable={false}/>
      <div className="absolute right-0 top-8 flex flex-col text-right">
        <span className="line-through">{(price * 1.9).toFixed(2)} $</span>
        <span className="text-2xl text-red-800 no-underline font-bold">
          {price} $
        </span>
      </div>
    </div>
  );
};

export default CarouselItem;
