import React, { useState } from "react";
import "./History.scss";
import HistoryItem from "./__HistoryItem/HistoryItem";
import { HistoryProp, HistoryProps } from "../../../../interfaces/types";

const History = ({
  historyArray,
  value,
  changeSearchValueFunc,
  createValue,
}: HistoryProps) => {
  const [arrayOfHistory, setArrayOfHistory] = useState(historyArray);

  function removeItemFromHistory(removingItem: HistoryProp) {
    setArrayOfHistory(
      arrayOfHistory.filter(
        (historyItem) => historyItem.item !== removingItem.item,
      ),
    );
  }

  return (
    <div className="history searching-panel__history">
      {arrayOfHistory.map((item) => (
        <HistoryItem
          createValue={createValue}
          removeItem={removeItemFromHistory}
          arrayItem={item}
          key={item.key}
          value={value}
          changeSearchValueFunc={changeSearchValueFunc}
        />
      ))}
    </div>
  );
};

export default History;
