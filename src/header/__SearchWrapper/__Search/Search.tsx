import React, { SyntheticEvent } from "react";
import "./Search.scss";
import { addSearchToLocalStorage } from "../../../utils/utils";
import { SearchProps } from "../../../interfaces/types";

const Search = (props: SearchProps) => {
  const {
    onFocusHandler,
    parent,
    setInputValue,
    inputValue,
    changeInputFunc,
    changeSearchValueFunc,
    create,
  } = props;

  return (
    <form
      className={`search ${parent}-search`}
      onSubmit={(event) => {
        event.preventDefault();
        const submitValue = {
          item: inputValue.trim(),
          key: String(Date.now()),
        };
        if (submitValue.item.length) {
          addSearchToLocalStorage("historySearch", submitValue);
          changeInputFunc();
          changeSearchValueFunc(inputValue);
        }
      }}
    >
      <button
        type="button"
        className={"search-ico search__search-ico"}
        onClick={onFocusHandler}
      />
      {parent !== "searching-panel" ? (
        <input
          value={inputValue}
          className={`search-input`}
          placeholder={"Поиск товаров"}
          onFocus={onFocusHandler}
          readOnly={true}
        />
      ) : (
        <input
          className={`search-input`}
          autoFocus
          placeholder={"Поиск товаров"}
          value={inputValue}
          onChange={(event: SyntheticEvent) => {
            const target = event.target as HTMLInputElement;
            setInputValue(target.value);
            create(target.value);
          }}
        />
      )}
    </form>
  );
};

export default Search;
