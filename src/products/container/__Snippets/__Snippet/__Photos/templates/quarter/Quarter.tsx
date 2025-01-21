import React from "react";
import {
  Indexed,
  ProductItemWithType,
} from "../../../../../../../interfaces/types";
import "./Quarter.scss";
import { setBackgroundStyles } from "../../../../../../../utils/utils";
import { backgroundColors } from "../../../../../../../data/constants/constants";

const Quarter = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { containerType, snippet } = props;
  const colors = backgroundColors as Indexed;
  return (
    <div className={"quarter-photos"}>
      <div
        className={`quarter-photos__photo quarter-photos__photo_left  ${containerType}-${snippet.id} ${containerType}-${snippet.id}_left`}
        style={setBackgroundStyles(snippet, colors)}
      ></div>
      <div
        className={`quarter-photos__photo quarter-photos__photo_right  ${containerType}-${snippet.id} ${containerType}-${snippet.id}_right`}
        style={setBackgroundStyles(snippet, colors)}
      ></div>
    </div>
  );
};

export default Quarter;
