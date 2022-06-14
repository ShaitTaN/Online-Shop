import React from "react";
import { IProduct } from "../../models/IProduct";
import { storeApi } from "../../services/StoreService";
import Loader from "../Loader";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
	const {data: products, isLoading} = storeApi.useGetProductsFromQuery('jewelery')
  const [currentSlide, setCurrentSlide] = React.useState(0);

	const changeSlide = (index: number) => {
		setCurrentSlide(index)
	}

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[310px] flex justify-center h-[280px] relative overflow-hidden sm:w-[500px] sm:h-[350px]">
				{isLoading && <Loader/>}
        <div
          className={`absolute flex h-full left-0 w-[${products?.length || 4 * 310}px] sm:w-[${products?.length || 4 * 500}px] transition duration-300`}
					style={{transform: `translateX(${currentSlide*(-100 / (products?.length || 4))}%)`}}
        >
          {products?.map((product) => (
            <CarouselItem
              key={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              id={product.id}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 mt-3">
        {products?.map((item,i) => (
          <div onClick={() => changeSlide(i)} key={i} className={`w-[40px] h-[7px] ${currentSlide === i ? 'bg-gray-600' : 'bg-gray-500'} cursor-pointer`} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
