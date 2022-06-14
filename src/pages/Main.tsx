import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Catalog from "../components/Catalog/Catalog";

const Main = () => {
  return (
    <div className="mt-5">
      <div className="container mx-auto flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl">Большая распродажа</h3>
        <h2 className="text-4xl font-bold sm:text-5xl mb-3">Скидки до 90%</h2>
        <Carousel />
      </div>
			<div className="bg-gray-900 text-center text-white mt-8 py-9">
				<h3 className="text-2xl mb-4"><span className="font-bold">БЕСПЛАТНАЯ ДОСТАВКА</span> ОТ 3000₽</h3>
				<p className="text-gray-400">Сделайте заказ и получите подарок!</p>	
			</div>
			<Catalog/>
    </div>
  );
};

export default Main;
