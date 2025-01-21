import React from "react";
import "./Price.scss";
import { ProductItemWithType } from "../../../../../../../../interfaces/types";

const Price = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { containerType, snippet } = props;
  return (
    <div className={`price ${containerType}-price`}>
      <div className={`current-price ${containerType}-current-price`}>
        {snippet.discount_price.length
          ? snippet.discount_price + " ₽"
          : snippet.full_price + " ₽"}
      </div>
      <div className={`old-price ${containerType}-old-price `}>
        {snippet.discount_price.length ? snippet.full_price + " ₽" : null}
      </div>
    </div>
  );
};

export default Price;
