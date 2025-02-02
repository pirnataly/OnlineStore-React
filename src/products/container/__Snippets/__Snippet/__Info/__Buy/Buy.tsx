import React from "react";
import "./Buy.scss";
import { ProductItemWithType } from "../../../../../../interfaces/types";
import BuyButton from "./__BuyButton/BuyButton";
import PriceProof from "./price&proof/PriceProof";

const Buy = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { containerType, snippet } = props;
  return (
    <div className={"buy"}>
      <PriceProof containerType={containerType} snippet={snippet} />
      <BuyButton containerType={containerType} extraClass={"buy"} />
    </div>
  );
};

export default Buy;
