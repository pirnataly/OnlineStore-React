import React from "react";
import "./Proof.scss";
import {
  ProductItemWithType,
  ProductItemWithTypeKeys,
  ProofSigns,
} from "../../../../../../../../../interfaces/types";

const Proof = (props: {
  containerType: string;
  snippet: ProductItemWithType;
  snippetKey: ProductItemWithTypeKeys;
  proofSign: ProofSigns;
}) => {
  const { containerType, snippet, snippetKey, proofSign } = props;

  return (
    <div className={`proof ${containerType}-proof`}>
      <div className={`${containerType}-proof-text`}>{snippet[snippetKey]}</div>
      <div className={`proof__icon ${containerType}-proof-${proofSign}`}></div>
    </div>
  );
};

export default Proof;
