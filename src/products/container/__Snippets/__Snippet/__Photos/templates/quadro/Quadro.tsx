import React from "react";
import {
  Indexed,
  ProductItemWithType,
} from "../../../../../../../interfaces/types";
import "./Quadro.scss";
import { setBackgroundStyles } from "../../../../../../../utils/utils";
import { backgroundColors } from "../../../../../../../data/constants/constants";

const Quadro = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { containerType, snippet } = props;
  const colors = backgroundColors as Indexed;
  return (
    <div className={"quadro-photos"}>
      <div
        className={`quadro-photos__photo quadro-photos__photo_first ${containerType}-${snippet.id} ${containerType}-${snippet.id}_first`}
        style={setBackgroundStyles(snippet, colors)}
      ></div>
      <div
        className={`quadro-photos__photo quadro-photos__photo_second  ${containerType}-${snippet.id} ${containerType}-${snippet.id}_second`}
        style={setBackgroundStyles(snippet, colors)}
      ></div>
      <div
        className={`quadro-photos__photo quadro-photos__photo_third  ${containerType}-${snippet.id} ${containerType}-${snippet.id}_third`}
        style={setBackgroundStyles(snippet, colors)}
      ></div>
      <div
        className={`quadro-photos__photo quadro-photos__photo_fourth ${containerType}-${snippet.id} ${containerType}-${snippet.id}_fourth`}
        style={setBackgroundStyles(snippet, colors)}
      ></div>
    </div>
  );
};

export default Quadro;
