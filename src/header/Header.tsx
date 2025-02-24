import React from "react";
import "./Header.scss";
import Logo from "./__Logo/Logo";
import Menu from "./__Menu/Menu";
import { menuItemsTop } from "../data/constants/constants";

import SearchWrapper from "./__SearchWrapper/SearchWrapper";

const Header = () => {
  return (
    <header className={"header"}>
      <Logo text={"магаз"}></Logo>
      <SearchWrapper />
      <Menu items={menuItemsTop} containerType={"header"} itemType={"header"} />
    </header>
  );
};

export default Header;
