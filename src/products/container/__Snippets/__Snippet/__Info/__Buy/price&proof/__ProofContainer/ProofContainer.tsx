import React from "react";
import "./ProofContainer.scss";
import { ProductItemWithType } from "../../../../../../../../interfaces/types";
import Proof from "./__Proof/Proof";

const ProofContainer = (props: {
  containerType: string;
  snippet: ProductItemWithType;
  extraClass: string;
  parent: string;
}) => {
  const { containerType, snippet, extraClass, parent } = props;
  return (
    <div
      className={`proof-container ${containerType}-proof-container ${extraClass}__${containerType}-proof-container`}
    >
      <Proof
        containerType={containerType}
        snippet={snippet}
        snippetKey={"review_rating"}
        proofSign={"star"}
        parent={parent}
      />
      <Proof
        containerType={containerType}
        snippet={snippet}
        snippetKey={"likes"}
        proofSign={"like"}
        parent={parent}
      />
    </div>
  );
};

export default ProofContainer;
