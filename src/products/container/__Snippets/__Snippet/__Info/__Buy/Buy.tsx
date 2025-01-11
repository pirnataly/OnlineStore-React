import React from "react";
import "./Buy.scss";
import { ProductItemWithType } from "../../../../../../interfaces/types";
import BuyButton from "./__BuyButton/BuyButton";
import PriceProof from "./price&proof/PriceProof";

const Buy = (props: { blockClass: string; snippet: ProductItemWithType }) => {
  const { blockClass, snippet } = props;
  return (
    <div className={"buy"}>
      <PriceProof blockClass={blockClass} snippet={snippet} />
      <BuyButton blockClass={blockClass} />
    </div>
  );
};

export default Buy;
