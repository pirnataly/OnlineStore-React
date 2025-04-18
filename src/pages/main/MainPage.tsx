import React from "react";
import Header from "../../header/Header";
import { PageRendererType, Pages } from "../../interfaces/types";
import BannerAndCategories from "../../banner&categories/BannerAndCategories";
import Products from "../../products/Products";

const MainPage = (props: PageRendererType) => {
  const {
    changeSearchValueFunc,
    changePage,
    changeCategoryFunc,
    inputValue,
    setInputValue,
    page,
    viewportWidth,
  } = props;

  return (
    <>
      <Header
        changeSearchValueFunc={changeSearchValueFunc}
        changePage={changePage}
        parent={Pages.main}
        changeCategoryFunc={changeCategoryFunc}
        inputValue={inputValue}
        setInputValue={setInputValue}
        logoText={"магаз"}
        viewportWidth={viewportWidth}
      />
      <BannerAndCategories func={changeCategoryFunc} />
      <Products parent={page} />
    </>
  );
};

export default MainPage;
