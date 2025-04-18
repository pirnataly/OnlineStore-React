import React, { useEffect, useState } from "react";
import "./SearchingPanel.scss";
import { MenuItem, SearchingPanelProps } from "../../../interfaces/types";
import Search from "../__Search/Search";
import History from "./__History/History";
import Categories from "../../../banner&categories/__Categories/Categories";
import categories from "../../../data/categories.json";
import {
  findWordsStartingWith,
  normalizeLocalStorageArray,
} from "../../../utils/utils";
import { popularStuff } from "../../../data/constants/constants";

const SearchingPanel = (props: SearchingPanelProps) => {
  const {
    onFocusHandler,
    inputValue,
    setInputValue,
    changeInputHandler,
    changePageDueToValue,
    changeCategoryFunc,
    onClickHandler,
  } = props;

  const [categoryItems, setCategoryItems] = useState(categories as MenuItem[]);
  const historyArray = normalizeLocalStorageArray(
    "historySearch",
    popularStuff,
  );

  useEffect(() => {
    const filteredCategories = [...categories].filter((item) =>
      findWordsStartingWith(item.description, inputValue.trim()),
    );

    if (filteredCategories.length !== 0) {
      setCategoryItems(filteredCategories as MenuItem[]);
    } else {
      setCategoryItems(categories as MenuItem[]);
    }
  }, [inputValue]);

  function createValue(newValue: string) {
    setInputValue(newValue);
  }

  return (
    <div
      className={"searching-panel overlay__searching-panel"}
      onClick={onClickHandler}
    >
      <Search
        onFocusHandler={onFocusHandler}
        parent="searching-panel"
        create={createValue}
        inputValue={inputValue}
        setInputValue={setInputValue}
        changeInputFunc={changeInputHandler}
        changeSearchValueFunc={changePageDueToValue}
      />
      <History
        createValue={createValue}
        historyArray={historyArray}
        value={inputValue}
        changeSearchValueFunc={changePageDueToValue}
      />
      <Categories
        items={categoryItems}
        containerType={"searching-panel"}
        itemType={"category"}
        value={inputValue}
        func={changeCategoryFunc}
      />
    </div>
  );
};

export default SearchingPanel;
