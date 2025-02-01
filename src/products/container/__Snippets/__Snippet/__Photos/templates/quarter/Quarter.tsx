import React from "react";
import {
  Indexed,
  ProductItemWithType,
} from "../../../../../../../interfaces/types";
import "./Quarter.scss";
import { setBackgroundStyles } from "../../../../../../../utils/utils";
import { backgroundColors } from "../../../../../../../data/constants/constants";

const Quarter = (props: { snippet: ProductItemWithType }) => {
  const { snippet } = props;
  const colors = backgroundColors as Indexed;
  let Urls = snippet.photo_url.slice(0, 2) as Array<string>;
  Urls = Urls.length < 2 ? new Array(2).fill(Urls).flat(1) : Urls;

  return (
    <div className={"quarter-photos"}>
      {Urls.map((photoUrl: string, index: number) => (
        <div
          key={`${snippet.id}_${index}`}
          className={`quarter-photos__photo quarter-photos__photo_${index + 1}`}
          style={setBackgroundStyles(snippet, colors, photoUrl)}
        ></div>
      ))}
    </div>
  );
};

export default Quarter;
