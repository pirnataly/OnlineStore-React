import React, { SyntheticEvent } from "react";
import "./CountButton.scss";
import { FunctionTypeVoid } from "../../../../../../../interfaces/types";

const CountButton = (props: {
  count: number;
  containerType: string;
  functions: FunctionTypeVoid[];
  extraClass: string;
}) => {
  const { count, containerType, functions, extraClass } = props;
  const [increment, decrement] = functions;

  function changeCount(e: SyntheticEvent) {
    const target = e.target as HTMLElement;
    if (target.closest(".buy__minus")) {
      decrement();
    } else if (target.closest(".buy__plus")) {
      increment();
    }
  }

  return (
    <div
      className={`count-button ${containerType}-buy-button ${extraClass}`}
      onClick={changeCount}
    >
      <div className={"buy__minus"}></div>
      <div className={`buy-text buy-text_count ${containerType}-buy-text`}>
        {count}
      </div>
      <div className={"buy__plus"}></div>
    </div>
  );
};

export default CountButton;
