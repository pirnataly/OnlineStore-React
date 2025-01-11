import React from "react";
import "./Double.scss";
import { ProductItemWithType } from "../../../../../../../interfaces/types";

const Double = (props: {
  blockClass: string;
  snippet: ProductItemWithType;
}) => {
  const { blockClass, snippet } = props;
  return (
    <div className={"double-photos"}>
      <div
        className={`photo-double_left ${snippet.id} ${blockClass}-${snippet.id} ${blockClass}-${snippet.id}_left`}
      ></div>
      <div
        className={`photo-double_right ${snippet.id} ${blockClass}-${snippet.id} ${blockClass}-${snippet.id}_right`}
      ></div>
    </div>
  );
};

export default Double;
