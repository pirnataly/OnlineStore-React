import React from "react";
import {
  Indexed,
  ProductItemWithType,
} from "../../../../../../../interfaces/types";
import "./Quadro.scss";
import {
  getPhotos,
  setBackgroundStyles,
} from "../../../../../../../utils/utils";
import { backgroundColors } from "../../../../../../../data/constants/constants";

const Quadro = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { snippet } = props;
  const colors = backgroundColors as Indexed;
  const Urls = getPhotos(snippet.photo_url, 4);

  return (
    <div className={"quadro-photos"}>
      {Urls.map((photoUrl: string, index: number) => (
        <div
          key={`${snippet.id}_${index}`}
          className={`quadro-photos__photo quadro-photos__photo_${index + 1}`}
          style={setBackgroundStyles(snippet, colors, photoUrl)}
        ></div>
      ))}
    </div>
  );
};

export default Quadro;
