import React from "react";
import "./SearchButton.scss";
import { FunctionTypeVoid } from "../../interfaces/types";

const SearchButton = (props: { onClickHandler: FunctionTypeVoid }) => {
  const { onClickHandler } = props;

  function onClickSearchHandler() {
    onClickHandler();
  }

  return (
    <div
      className={"search-button header__search-button"}
      onClick={onClickSearchHandler}
    />
  );
};

export default SearchButton;
