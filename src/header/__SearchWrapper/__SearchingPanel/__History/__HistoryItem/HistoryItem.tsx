import React from "react";
import "./HistoryItem.scss";
import { HistoryItemProps } from "../../../../../interfaces/types";
import ColoredLetters from "../../ColoredLetters/ColoredLetters";
import {
  getFromLocalStorage,
  removeSearchFromLocalStorage,
} from "../../../../../utils/utils";

const HistoryItem = (props: HistoryItemProps) => {
  const { arrayItem, value, changeSearchValueFunc, removeItem, createValue } =
    props;

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).classList.contains("delete-ico")) {
      if (getFromLocalStorage("historySearch")) {
        removeSearchFromLocalStorage("historySearch", arrayItem);
        removeItem(arrayItem);
      }
      removeItem(arrayItem);
    } else {
      createValue(arrayItem.item);
      changeSearchValueFunc(arrayItem.item);
    }
  }

  return (
    <div className="history-item" onClick={handleClick}>
      <p className="history-item__text">
        <ColoredLetters str={arrayItem.item} val={value ? value : ""} />
      </p>
      <div className={"delete-ico"}></div>
    </div>
  );
};

export default HistoryItem;
