import React from "react";
import "./ProofContainer.scss";
import { ProductItemWithType } from "../../../../../../../../interfaces/types";
import Proof from "./__Proof/Proof";

const ProofContainer = (props: {
  containerType: string;
  snippet: ProductItemWithType;
  extraClass: string;
}) => {
  const { containerType, snippet, extraClass } = props;
  return (
    <div
      className={`proof-container ${containerType}-proof-container ${extraClass}__${containerType}-proof-container`}
    >
      <Proof
        containerType={containerType}
        snippet={snippet}
        snippetKey={"review_rating"}
        proofSign={"star"}
      />
      <Proof
        containerType={containerType}
        snippet={snippet}
        snippetKey={"likes"}
        proofSign={"like"}
      />
    </div>
  );
};

export default ProofContainer;
