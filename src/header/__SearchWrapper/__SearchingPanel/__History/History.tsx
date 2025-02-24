import React from "react";
import "./History.scss";
import HistoryItem from "./__HistoryItem/HistoryItem";
import { HistoryProps } from "../../../../interfaces/types";

const History = ({ historyArray, value }: HistoryProps) => {
  return (
    <div className="history searching-panel__history">
      {historyArray.map((item) => (
        <HistoryItem arrayItem={item} key={item.key} value={value} />
      ))}
    </div>
  );
};

export default History;
