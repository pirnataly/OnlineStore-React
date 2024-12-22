import React from "react";
import "./App.scss";
import Header from "./header/Header";
import Menu from "./header/__Menu/Menu";
import { menuItemsBottom } from "./data/constants/constants";
import BannerAndCategories from "./banner&categories/BannerAndCategories";

function App() {
  return (
    <div className={"app"}>
      <Header />
      <BannerAndCategories />
      <Menu items={menuItemsBottom} blockClass={"app"} itemType={"header"} />
    </div>
  );
}

export default App;
