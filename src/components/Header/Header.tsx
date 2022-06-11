import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <Link className="header__logo" to={"/"}>
          <img src="./assets/icons/logo.svg" /> THE LOOP
        </Link>
        <Link className="header__cart" to={"/cart"}>
          <img src="./assets/icons/cart.svg" />
          <div className="">0</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
