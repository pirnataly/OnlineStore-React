import React from "react";
import "./App.scss";
import Header from "./header/Header";
import Menu from "./header/__Menu/Menu";
import { menuItemsBottom } from "./data/constants/constants";

function App() {
  return (
    <div className={"app"}>
      <Header />
      <Menu items={menuItemsBottom} navClass={"app"} />
    </div>
  );
}

export default App;
