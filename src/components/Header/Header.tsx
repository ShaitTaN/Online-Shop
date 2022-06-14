import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import "./header.scss";

const Header = () => {
	const {products} = useAppSelector(state => state.cart)

  return (
    <div className="header">
      <div className="header__container">
        <Link className="header__logo" to={"/"}>
          <img src="./assets/icons/logo.svg" /> THE LOOP
        </Link>
        <Link className="header__cart" to={"/cart"}>
          <img src="./assets/icons/cart.svg" />
          <div className="">{products.length}</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
