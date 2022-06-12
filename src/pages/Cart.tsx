import React from "react";

const Cart = () => {
  return (
    <div className="my-5">
      <div className="container mx-auto">
        <div className="flex h-[150px] items-center justify-around rounded-2xl shadow-md">
          <img className="h-full" src="./assets/images/boots.png" />
          <p>БОТИНКИ</p>
					<span>8 $</span>
					<div className="flex items-center">
						<div className="rounded-full p-3">+</div>
						<div className="mx-4">1</div>
						<div className="rounded-full p-3">-</div>
					</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
