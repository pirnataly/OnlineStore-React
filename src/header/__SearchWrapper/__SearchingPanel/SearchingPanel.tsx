import React, { useEffect, useState } from "react";
import "./SearchingPanel.scss";
import { FunctionTypeVoid, MenuItem } from "../../../interfaces/types";
import Search from "../__Search/Search";
import History from "./__History/History";
import Categories from "../../../banner&categories/__Categories/Categories";
import categories from "../../../data/categories.json";
import {
  findWordsStartingWith,
  normalizeLocalStorageArray,
} from "../../../utils/utils";
import { popularStuff } from "../../../data/constants/constants";

const SearchingPanel = (props: { onFocusHandler: FunctionTypeVoid }) => {
  const [valueFromInput, setValueFromInput] = useState("");
  const { onFocusHandler } = props;
  const [categoryItems, setCategoryItems] = useState(
    categories.length !== 0 ? (categories as MenuItem[]) : [],
  );
  const historyArray = normalizeLocalStorageArray(
    "historySearch",
    popularStuff,
  );

  useEffect(() => {
    const filteredCategories = categories.filter((item) =>
      findWordsStartingWith(item.description, valueFromInput),
    );
    return filteredCategories.length !== 0
      ? setCategoryItems(filteredCategories as MenuItem[])
      : setCategoryItems(categoryItems);
  }, [valueFromInput, categoryItems]);

  function createValue(newValue: string) {
    setValueFromInput(newValue);
  }

  return (
    <div className={"searching-panel overlay__searching-panel"}>
      <Search
        onFocusHandler={onFocusHandler}
        parent="searching-panel"
        create={createValue}
        value={valueFromInput}
      />
      <History historyArray={historyArray} value={valueFromInput} />
      <Categories
        items={categoryItems}
        containerType={"searching-panel"}
        itemType={"category"}
        value={valueFromInput}
      />
    </div>
  );
};

export default SearchingPanel;
