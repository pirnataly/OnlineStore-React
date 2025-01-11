import React from "react";
import { ProductItemWithType } from "../../../../../../../interfaces/types";
import "./Card.scss";

const Card = (props: { blockClass: string; snippet: ProductItemWithType }) => {
  const { blockClass, snippet } = props;
  return (
    <div className={"card-photo"}>
      <div
        className={`photo-card ${snippet.id} ${blockClass}-${snippet.id}`}
      ></div>
    </div>
  );
};

export default Card;
