import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <div className={"search"}>
      <div className={"search-ico search__search-ico"} />
      <input className={"search-input"} placeholder={"Поиск товаров"} />
    </div>
  );
};

export default Search;
