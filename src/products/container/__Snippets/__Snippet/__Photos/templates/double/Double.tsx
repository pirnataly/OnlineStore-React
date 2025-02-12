import React from "react";
import "./Double.scss";
import {
  Indexed,
  ProductItemWithType,
} from "../../../../../../../interfaces/types";
import { backgroundColors } from "../../../../../../../data/constants/constants";
import {
  getPhotos,
  setBackgroundStyles,
} from "../../../../../../../utils/utils";

const Double = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { snippet } = props;
  const colors = backgroundColors as Indexed;
  const Urls = getPhotos(snippet.photo_url, 2);

  return (
    <div className={"double-photos"}>
      {Urls.map((photoUrl: string, index: number) => (
        <div
          key={`${snippet.id}_${index}`}
          className={`double-photos__photo double-photos__photo_${index + 1}`}
          style={setBackgroundStyles(snippet, colors, photoUrl)}
        ></div>
      ))}
    </div>
  );
};

export default Double;
