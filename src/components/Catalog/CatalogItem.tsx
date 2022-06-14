import React, { FC } from "react";
import { IProduct } from "../../models/IProduct";

const CatalogItem:FC<IProduct> = ({price, image, title}) => {
  return (
    <div className="catalog__cards-item">
      <span className="text-right text-green-800">{price} $</span>
      <img className="h-[200px]" src={image} />
      <p className="text-center uppercase my-4">{title.substring(0, 20) + '...'}</p>
      <div className="catalog__cards-btn">В корзину</div>
    </div>
  );
};

export default CatalogItem;
