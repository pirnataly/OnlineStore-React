import React, { SyntheticEvent, useState } from "react";
import "./Search.scss";
import { setSearchToLocalStorage } from "../../../utils/utils";

const Search = (props: {
  onFocusHandler: () => void;
  parent: string;
  create: (val: string) => void;
  value: string;
}) => {
  const { onFocusHandler, parent } = props;
  const [value, setValue] = useState("");

  return (
    <form
      className={`search ${parent}-search`}
      onSubmit={(event) => {
        event.preventDefault();
        const submitValue = { item: value.trim(), key: String(Date.now()) };
        setSearchToLocalStorage("historySearch", submitValue);
      }}
    >
      <div className={"search-ico search__search-ico"} />
      {parent !== "searching-panel" ? (
        <input
          className={`search-input`}
          placeholder={"Поиск товаров"}
          onFocus={onFocusHandler}
        />
      ) : (
        <input
          className={`search-input`}
          autoFocus
          placeholder={"Поиск товаров"}
          value={value}
          onChange={(event: SyntheticEvent) => {
            setValue((event.target as HTMLInputElement).value);
            props.create((event.target as HTMLInputElement).value);
          }}
        />
      )}
    </form>
  );
};

export default Search;
