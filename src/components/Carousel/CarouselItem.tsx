import React, { FC } from "react";
import { IProduct } from "../../models/IProduct";

const CarouselItem: FC<IProduct> = ({price, image}) => {
  return (
    <div className="relative w-[500px]">
      <img src={image} />
      <div className="absolute right-0 top-8 flex flex-col text-right">
        <span className="line-through">80 $</span>
        <span className="text-2xl text-red-800 no-underline font-bold">
          {price} $
        </span>
      </div>
    </div>
  );
};

export default CarouselItem;
