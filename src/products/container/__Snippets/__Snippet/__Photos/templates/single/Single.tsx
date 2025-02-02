import React from "react";
import "./Single.scss";
import {
  Indexed,
  ProductItemWithType,
} from "../../../../../../../interfaces/types";
import { setBackgroundStyles } from "../../../../../../../utils/utils";
import { backgroundColors } from "../../../../../../../data/constants/constants";

const Single = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { containerType, snippet } = props;
  const colors = backgroundColors as Indexed;

  return (
    <div className={"single-photo"}>
      <div
        className={`photo-single  single-photo__photo-single ${containerType}-${snippet.id}`}
        style={setBackgroundStyles(snippet, colors, snippet.photo_url[0])}
      ></div>
    </div>
  );
};

export default Single;
