import React from "react";
import "./Double.scss";
import { ProductItemWithType } from "../../../../../../../interfaces/types";

const Double = (props: { snippet: ProductItemWithType }) => {
  const { snippet } = props;
  return (
    <div className={"double-photos"}>
      <div
        className={`photo-double_left ${snippet.id} ${snippet.id}_left`}
      ></div>
      <div
        className={`photo-double_right ${snippet.id} ${snippet.id}_right`}
      ></div>
    </div>
  );
};

export default Double;
