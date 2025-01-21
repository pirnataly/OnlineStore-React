import React from "react";
import {
  Indexed,
  ProductItemWithType,
} from "../../../../../../../interfaces/types";
import "./Card.scss";
import { backgroundColors } from "../../../../../../../data/constants/constants";

const Card = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { containerType, snippet } = props;
  const colors = backgroundColors as Indexed;
  return (
    <div className={"card-photo"}>
      <div
        className={`card-photo__photo ${containerType}-${snippet.id}`}
        style={{
          backgroundImage: `url("/products/${snippet.photo_url}")`,
          backgroundColor: `${colors[snippet.background]}`,
        }}
      ></div>
    </div>
  );
};

export default Card;
