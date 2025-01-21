import React from "react";
import "./App.scss";
import Header from "./header/Header";
import Menu from "./header/__Menu/Menu";
import { menuItemsBottom } from "./data/constants/constants";
import BannerAndCategories from "./banner&categories/BannerAndCategories";
import Products from "./products/Products";

function App() {
  return (
    <div className={"app"}>
      <Header />
      <BannerAndCategories />
      <Products />
      <Menu items={menuItemsBottom} containerType={"app"} itemType={"header"} />
    </div>
  );
}

export default App;
