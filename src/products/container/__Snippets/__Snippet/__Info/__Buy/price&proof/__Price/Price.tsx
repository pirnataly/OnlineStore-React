import React from "react";
import "./Price.scss";
import { ProductItemWithType } from "../../../../../../../../interfaces/types";

const Price = (props: {
  containerType: string;
  snippet: ProductItemWithType;
  parent: string;
}) => {
  const { containerType, snippet, parent } = props;
  return (
    <div className={`price ${containerType}-price`}>
      <div
        className={`current-price ${containerType}-current-price ${parent}__${containerType}-current-price`}
      >
        {snippet.discount_price.length
          ? snippet.discount_price + " ₽"
          : snippet.full_price + " ₽"}
      </div>
      <div
        className={`old-price ${containerType}-old-price ${parent}__${containerType}-old-price`}
      >
        <span>
          {snippet.discount_price.length ? snippet.full_price + " ₽" : null}
        </span>
        <div
          className={`strikeout  ${parent}__${containerType}-strikeout`}
        ></div>
      </div>
    </div>
  );
};

export default Price;
