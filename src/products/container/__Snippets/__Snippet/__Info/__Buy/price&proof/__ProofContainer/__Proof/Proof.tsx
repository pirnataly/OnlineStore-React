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
  parent: string;
}) => {
  const { containerType, snippet, snippetKey, proofSign, parent } = props;

  return (
    <div className={`proof ${containerType}-proof`}>
      <div
        className={`proof-text ${containerType}-proof-text ${parent}__${containerType}-proof-text`}
      >
        {snippet[snippetKey]}
      </div>
      <div
        className={`proof__icon ${parent}__${containerType}-proof-${proofSign}`}
      ></div>
    </div>
  );
};

export default Proof;
