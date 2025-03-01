import React, { useState } from "react";
import "./App.scss";
import Header from "./header/Header";
import Menu from "./header/__Menu/Menu";
import { menuItemsBottom } from "./data/constants/constants";
import Footer from "./footer/Footer";
import PageRenderer from "./pageRenderer/PageRenderer";

function App() {
  const [page, setPage] = useState("catalog");

  function changePage(newValue: string) {
    setPage(newValue);
  }

  return (
    <div className="app">
      <Header changePage={changePage} parent={page} />
      <PageRenderer page={page} />
      <Footer />
      <Menu items={menuItemsBottom} containerType={"app"} itemType={"header"} />
    </div>
  );
}

export default App;
