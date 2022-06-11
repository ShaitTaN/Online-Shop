import React from "react";

const Carousel = () => {
  return (
    <div className="w-[500px] h-[350px] relative overflow-hidden">
      <div className="absolute flex h-full left-0 w-[5000px]">
        <div className="relative w-[500px]">
          <img src="./assets/images/boots.png"/>
          <div className="absolute right-0 top-8 flex flex-col text-right">
            <span className="line-through">80 $</span>
            <span className="text-2xl text-red-800 no-underline font-bold">
              10 $
            </span>
          </div>
        </div>
        <div className="relative w-[500px]">
          <img src="./assets/images/boots.png "/>
          <div className="absolute right-0 top-8 flex flex-col text-right">
            <span className="line-through">80 $</span>
            <span className="text-2xl text-red-800 no-underline font-bold">
              10 $
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
