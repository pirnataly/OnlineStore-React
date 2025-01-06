import React from "react";
import { ProductItemWithType } from "../../../../../../interfaces/types";
import "./Description.scss";

const Description = (props: { snippet: ProductItemWithType }) => {
  const { snippet } = props;
  return (
    <div className={"description snippet__description"}>
      <div className={"description-row description__up"}>
        <div className={"product-name description-row__name"}>
          {snippet.name}
        </div>
        <div className={"like"}></div>
      </div>
      <div className={"description-row description__bottom"}>
        <div className={"text description__text"}>{snippet.description}</div>
      </div>
    </div>
  );
};

export default Description;
