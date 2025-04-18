import React from "react";
import "./Header.scss";
import Logo from "./__Logo/Logo";
import Menu from "./__Menu/Menu";
import { menuItemsTop } from "../data/constants/constants";
import SearchWrapper from "./__SearchWrapper/SearchWrapper";
import { HeaderProps, Pages } from "../interfaces/types";
import { capitalize } from "../utils/utils";

const Header = (props: HeaderProps) => {
  const {
    parent,
    changePage,
    setInputValue,
    changeSearchValueFunc,
    changeCategoryFunc,
    inputValue,
    logoText,
    viewportWidth,
  } = props;

  function changePageAndClearInput(str: Pages) {
    // Here should be if(parent===Pages.main)
    changePage(str);
    if (parent === Pages.catalog) {
      setInputValue("");
    }
  }

  return (
    <header className={`header`}>
      <Logo
        logoText={
          window.matchMedia("(max-width: 376px)").matches &&
          parent !== Pages.main
            ? capitalize(logoText)
            : "магаз"
        }
        changePage={changePageAndClearInput}
        parent={parent}
      />
      <SearchWrapper
        changePageDueToValue={changeSearchValueFunc}
        changeCategoryFunc={changeCategoryFunc}
        inputValue={inputValue}
        setInputValue={setInputValue}
        viewportWidth={viewportWidth}
      />
      <Menu
        func={changeCategoryFunc}
        items={menuItemsTop}
        containerType={"header"}
        itemType={"header"}
      />
    </header>
  );
};

export default Header;
