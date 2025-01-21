import React from "react";
import "./Header.scss";
import Logo from "./__Logo/Logo";
import Search from "./__Search/Search";
import Menu from "./__Menu/Menu";
import { menuItemsTop } from "../data/constants/constants";
import SearchButton from "./__SearchButton/SearchButton";
import "./Header.scss";

const Header = () => {
  return (
    <header className={"header"}>
      <Logo text={"магаз"}></Logo>
      <SearchButton />
      <div className={"header__search"}>
        <Search />
      </div>
      <Menu items={menuItemsTop} containerType={"header"} itemType={"header"} />
    </header>
  );
};

export default Header;
