import React from "react";
import "./Price.scss";
import { ProductItemWithType } from "../../../../../../../../interfaces/types";

const Price = (props: { blockClass: string; snippet: ProductItemWithType }) => {
  const { blockClass, snippet } = props;
  return (
    <div className={`price ${blockClass}-price`}>
      <div className={"current-price"}>
        {snippet.discount_price.length
          ? snippet.discount_price + "₽"
          : snippet.full_price + "₽"}
      </div>
      <div className={"old-price price__old-price"}>
        {snippet.discount_price.length ? snippet.full_price + "₽" : null}
      </div>
    </div>
  );
};

export default Price;
