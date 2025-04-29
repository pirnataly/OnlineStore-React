import React from "react";
import { PageRendererType, Pages } from "../../interfaces/types";
import Header from "../../header/Header";
import Catalog from "./catalog/Catalog";

const CatalogPage = (props: PageRendererType) => {
  const {
    changeSearchValueFunc,
    changePage,
    changeCategoryFunc,
    inputValue,
    setInputValue,
    page,
    text,
    products,
    viewportWidth,
    activeSort,
    setActiveSort,
  } = props;

  return (
    <>
      <Header
        changeSearchValueFunc={changeSearchValueFunc}
        changePage={changePage}
        parent={Pages.catalog}
        changeCategoryFunc={changeCategoryFunc}
        inputValue={inputValue}
        setInputValue={setInputValue}
        logoText={text}
        viewportWidth={viewportWidth}
      />
      <Catalog
        page={page}
        text={text}
        products={products}
        viewportWidth={viewportWidth}
        activeSort={activeSort}
        setActiveSort={setActiveSort}
      />
    </>
  );
};

export default CatalogPage;
