import React from "react";
import { ProductItemWithType } from "../../../../../../../interfaces/types";
import "./PriceProof.scss";
import Price from "./__Price/Price";
import ProofContainer from "./__ProofContainer/ProofContainer";

const PriceProof = (props: {
  blockClass: string;
  snippet: ProductItemWithType;
}) => {
  const { blockClass, snippet } = props;
  return (
    <div className={`price-proof ${blockClass}-price-proof`}>
      <Price blockClass={blockClass} snippet={snippet} />
      <ProofContainer blockClass={blockClass} snippet={snippet} />
    </div>
  );
};

export default PriceProof;
