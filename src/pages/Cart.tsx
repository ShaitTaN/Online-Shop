import React from "react";

const Cart = () => {
  return (
    <div className="my-5">
      <div className="container mx-auto">
        <div className="flex h-[150px] items-center justify-around rounded-2xl shadow-md my-4 relative">
          <img className="h-full" src="./assets/images/boots.png" />
          <p>БОТИНКИ</p>
          <span>8 $</span>
          <div className="flex items-center">
            <div className="border-solid border-[1px] border-gray-500 rounded-full cursor-pointer w-[40px] h-[40px] flex items-center justify-center p-2 hover:bg-gray-500">
              <img src="./assets/icons/plus.svg" />
            </div>
            <div className="mx-4">1</div>
            <div className="border-solid border-[1px] border-gray-500 rounded-full cursor-pointer w-[40px] h-[40px] flex items-center justify-center p-2 hover:bg-gray-500">
              <img src="./assets/icons/minus.svg" />
            </div>
          </div>
					<div className="absolute right-2 top-2 cursor-pointer hover:font-bold">X</div>
        </div>
      </div>
			<div className="container mx-auto text-right border-b border-solid border-gray-500">
				Итого: 0 $
			</div>
    </div>
  );
};

export default Cart;
