import React from "react";
import "./Proof.scss";
import { ProductItemWithType } from "../../../../../../../../interfaces/types";

const ProofContainer = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { containerType, snippet } = props;
  return (
    <div className={`proof-container ${containerType}-proof-container`}>
      <div className={"proof"}>
        <div
          className={`${containerType}-proof-text`}
        >{`${snippet.review_rating}`}</div>
        <div className={`proof__icon ${containerType}-proof-star`}></div>
      </div>
      <div className={"proof"}>
        <div
          className={`${containerType}-proof-text`}
        >{`${snippet.likes}`}</div>
        <div className={`proof__icon ${containerType}-proof-like`}></div>
      </div>
    </div>
  );
};

export default ProofContainer;
