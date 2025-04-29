import React, { useEffect, useState } from "react";
import "./App.scss";
import Menu from "./header/__Menu/Menu";
import { menuItemsBottom } from "./data/constants/constants";
import Footer from "./footer/Footer";
import PageRenderer from "./pageRenderer/PageRenderer";
import products from "./data/products.json";
import { CategoryType, Pages, ProductItem } from "./interfaces/types";
import { selectProducts } from "./utils/utils";

function App() {
  const [page, setPage] = useState(Pages.main);
  const [productsList, setProductsList] = useState(products as ProductItem[]);
  const [selectedText, setSelectedText] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [activeSort, setActiveSort] = useState("Популярные");

  useEffect(() => {
    function handleOnResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleOnResize);
    return () => window.removeEventListener("resize", handleOnResize);
  }, []);

  function changePage(newValue: Pages) {
    setPage(newValue);
  }

  function setActiveState(str: string) {
    setActiveSort(str);
  }

  function changeCategories(category: CategoryType) {
    setSearchValue("");
    setProductsList(selectProducts(products, category, null));
    setSelectedText(category.description);
    changePage(Pages.catalog);
    setActiveState("Популярные");
  }

  function changeSearchValue(valueFromInput: string) {
    setProductsList(selectProducts(products, null, valueFromInput));
    setSelectedText(valueFromInput);
    changePage(Pages.catalog);
    setActiveState("Популярные");
  }

  return (
    <div className="app">
      <PageRenderer
        text={selectedText}
        page={page}
        changePage={changePage}
        changeCategoryFunc={changeCategories}
        changeSearchValueFunc={changeSearchValue}
        products={productsList}
        inputValue={searchValue}
        setInputValue={setSearchValue}
        viewportWidth={viewportWidth}
        activeSort={activeSort}
        setActiveSort={setActiveState}
      />
      <Footer />
      <Menu
        items={menuItemsBottom}
        containerType={"app"}
        itemType={"header"}
        func={() => {}}
      />
    </div>
  );
}

export default App;
