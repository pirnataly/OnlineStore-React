import React from "react";
import "./App.scss";
import Header from "./header/Header";
import Menu from "./header/__Menu/Menu";
import { menuItemsBottom } from "./data/constants/constants";
import BannerAndCategories from "./banner&categories/BannerAndCategories";
import Products from "./products/Products";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <BannerAndCategories />
      <Products />
      <Footer />
      <Menu items={menuItemsBottom} containerType={"app"} itemType={"header"} />
    </div>
  );
}

export default App;
