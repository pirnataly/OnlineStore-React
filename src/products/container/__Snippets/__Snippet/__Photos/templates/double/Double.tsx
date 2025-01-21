import React from "react";
import "./Double.scss";
import {
  Indexed,
  ProductItemWithType,
} from "../../../../../../../interfaces/types";
import { backgroundColors } from "../../../../../../../data/constants/constants";
import { setBackgroundStyles } from "../../../../../../../utils/utils";

const Double = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { containerType, snippet } = props;
  const colors = backgroundColors as Indexed;

  return (
    <div className={"double-photos"}>
      <div
        className={`double-photos__photo double-photos__photo_left  ${containerType}-${snippet.id} ${containerType}-${snippet.id}_left`}
        style={setBackgroundStyles(snippet, colors)}
      ></div>
      <div
        className={`double-photos__photo double-photos__photo_right  ${containerType}-${snippet.id} ${containerType}-${snippet.id}_right`}
        style={setBackgroundStyles(snippet, colors)}
      ></div>
    </div>
  );
};

export default Double;
