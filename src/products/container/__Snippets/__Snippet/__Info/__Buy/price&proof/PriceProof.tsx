import React from "react";
import { ProductItemWithType } from "../../../../../../../interfaces/types";
import "./PriceProof.scss";
import Price from "./__Price/Price";
import ProofContainer from "./__ProofContainer/ProofContainer";

const PriceProof = (props: {
  containerType: string;
  snippet: ProductItemWithType;
  parent: string;
}) => {
  const { containerType, snippet, parent } = props;
  return (
    <div className={`price-proof ${containerType}-price-proof`}>
      <Price containerType={containerType} snippet={snippet} parent={parent} />
      <ProofContainer
        containerType={containerType}
        snippet={snippet}
        extraClass={"buy"}
        parent={parent}
      />
    </div>
  );
};

export default PriceProof;
