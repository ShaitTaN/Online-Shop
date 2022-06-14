import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Main from "./pages/Main";
import Pay from "./pages/Pay";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pay" element={<Pay />} />
    </Routes>
  );
};

export default AppRouter;
