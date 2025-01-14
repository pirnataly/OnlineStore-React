import React from "react";
import "./Proof.scss";
import { ProductItemWithType } from "../../../../../../../../interfaces/types";

const ProofContainer = (props: {
  blockClass: string;
  snippet: ProductItemWithType;
}) => {
  const { blockClass, snippet } = props;
  return (
    <div className={`proof-container ${blockClass}-proof-container`}>
      <div className={"proof"}>
        <div
          className={`${blockClass}-proof-text`}
        >{`${snippet.review_rating}`}</div>
        <div className={`proof__icon ${blockClass}-proof-star`}></div>
      </div>
      <div className={"proof"}>
        <div className={`${blockClass}-proof-text`}>{`${snippet.likes}`}</div>
        <div className={`proof__icon ${blockClass}-proof-like`}></div>
      </div>
    </div>
  );
};

export default ProofContainer;
