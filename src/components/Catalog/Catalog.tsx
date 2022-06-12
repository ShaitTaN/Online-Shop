import React from "react";
import './catalog.scss'

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog__types">
        <div className="catalog__types-item">
          <h3 className="text-2xl">
            <span className="font-bold">МУЖСКАЯ</span> КОЛЛЕКЦИЯ
          </h3>
          <p className="mt-4">Обувь, полуверы, костюмы</p>
          <div className="catalog__types-btn">
            <img src="./assets/icons/arrow.svg" />
          </div>
        </div>
        <div className="catalog__types-item">
          <h3 className="text-2xl">
            <span className="font-bold">ЖЕНСКАЯ</span> КОЛЛЕКЦИЯ
          </h3>
          <p className="mt-4">Обувь, полуверы, костюмы</p>
          <div className="catalog__types-btn">
            <img src="./assets/icons/arrow.svg" />
          </div>
        </div>
      </div>
      <div className="catalog__cards">
        <div className="catalog__cards-item">
          <span className="text-right text-green-800">9 $</span>
          <img src="./assets/images/boots.png" />
          <p className="uppercase my-4">Ботинки</p>
          <div className="catalog__cards-btn">
            В корзину
          </div>
        </div>
        <div className="catalog__cards-item">
          <span className="text-right text-green-800">9 $</span>
          <img src="./assets/images/boots.png" />
          <p className="uppercase my-4">Ботинки</p>
          <div className="catalog__cards-btn">
            В корзину
          </div>
        </div>
        <div className="catalog__cards-item">
          <span className="text-right text-green-800">9 $</span>
          <img src="./assets/images/boots.png" />
          <p className="uppercase my-4">Ботинки</p>
          <div className="catalog__cards-btn">
            В корзину
          </div>
        </div>
        <div className="catalog__cards-item">
          <span className="text-right text-green-800">9 $</span>
          <img src="./assets/images/boots.png" />
          <p className="uppercase my-4">Ботинки</p>
          <div className="catalog__cards-btn">
            В корзину
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
