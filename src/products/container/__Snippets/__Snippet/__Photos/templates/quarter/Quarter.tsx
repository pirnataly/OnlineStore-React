import React from "react";
import { ProductItemWithType } from "../../../../../../../interfaces/types";
import "./Quarter.scss";

const Quarter = (props: { snippet: ProductItemWithType }) => {
  const { snippet } = props;
  return (
    <div className={"quarter-photos"}>
      <div
        className={`photo-quarter_left ${snippet.id} ${snippet.id}_left`}
      ></div>
      <div
        className={`photo-quarter_right ${snippet.id} ${snippet.id}_right`}
      ></div>
    </div>
  );
};

export default Quarter;
