import React from "react";
import { ProductItemWithType } from "../../../../../../../interfaces/types";
import "./Quarter.scss";

const Quarter = (props: {
  blockClass: string;
  snippet: ProductItemWithType;
}) => {
  const { blockClass, snippet } = props;
  return (
    <div className={"quarter-photos"}>
      <div
        className={`photo-quarter_left ${snippet.id} ${blockClass}-${snippet.id} ${blockClass}-${snippet.id}}_left`}
      ></div>
      <div
        className={`photo-quarter_right ${snippet.id} ${blockClass}-${snippet.id} ${blockClass}-${snippet.id}_right`}
      ></div>
    </div>
  );
};

export default Quarter;
