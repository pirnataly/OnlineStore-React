import React from "react";
import { ProductItemWithType } from "../../../../../../../interfaces/types";
import "./PriceProof.scss";
import Price from "./__Price/Price";
import ProofContainer from "./__ProofContainer/ProofContainer";

const PriceProof = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { containerType, snippet } = props;
  return (
    <div className={`price-proof ${containerType}-price-proof`}>
      <Price containerType={containerType} snippet={snippet} />
      <ProofContainer containerType={containerType} snippet={snippet} />
    </div>
  );
};

export default PriceProof;
