import React from "react";
import "./HistoryItem.scss";
import { HistoryProp } from "../../../../../interfaces/types";
import ColoredLetters from "../../ColoredLetters/ColoredLetters";

const HistoryItem = (props: { arrayItem: HistoryProp; value: string }) => {
  const { arrayItem } = props;

  return (
    <div className="history-item">
      <p className="history-item__text">
        <ColoredLetters str={arrayItem.item} val={props.value} />
      </p>
      <div className={"delete-ico"}></div>
    </div>
  );
};

export default HistoryItem;
