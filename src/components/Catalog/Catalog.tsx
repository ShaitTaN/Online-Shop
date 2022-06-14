import React from "react";
import { storeApi } from "../../services/StoreService";
import Loader from "../Loader";
import "./catalog.scss";
import CatalogItem from "./CatalogItem";

type categories = "men's clothing" | "women's clothing";

const Catalog = () => {
  const [category, setCategory] = React.useState<categories>("men's clothing");
  const {
    data: products,
    isFetching,
  } = storeApi.useGetProductsFromQuery(category);

  const changeCategory = (category: categories) => {
    setCategory(category);
  };

  return (
    <div className="catalog">
      <div className="catalog__types">
        <div className="catalog__types-item">
          <h3 className="sm:text-2xl text-xl">
            <span className="font-bold">МУЖСКАЯ</span> КОЛЛЕКЦИЯ
          </h3>
          <p className="mt-4">Обувь, полуверы, костюмы</p>
          <div
            onClick={() => changeCategory("men's clothing")}
            className="catalog__types-btn"
          >
            <img src="./assets/icons/arrow.svg" />
          </div>
        </div>
        <div className="catalog__types-item">
          <h3 className="sm:text-2xl text-xl">
            <span className="font-bold">ЖЕНСКАЯ</span> КОЛЛЕКЦИЯ
          </h3>
          <p className="mt-4">Обувь, полуверы, костюмы</p>
          <div
            onClick={() => changeCategory("women's clothing")}
            className="catalog__types-btn"
          >
            <img src="./assets/icons/arrow.svg" />
          </div>
        </div>
      </div>
      <div className="catalog__cards">
        {isFetching ? (
          Array(4).fill('').map(item => <Loader/>)
        ) : (
          products?.map((item) => (
            <CatalogItem
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              key={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Catalog;
