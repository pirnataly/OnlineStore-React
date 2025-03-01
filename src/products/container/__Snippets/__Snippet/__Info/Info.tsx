import React from "react";
import "./Info.scss";
import { ProductItemWithType } from "../../../../../interfaces/types";
import Description from "./__Description/Description";
import Buy from "./__Buy/Buy";
import PriceProof from "./__Buy/price&proof/PriceProof";
import TextBlock from "./__Description/__TextBlock/TextBlock";
import BuyButton from "./__Buy/__BuyButton/BuyButton";
import Buttons from "./__Buttons/Buttons";
import ProofContainer from "./__Buy/price&proof/__ProofContainer/ProofContainer";

const Info = (props: {
  containerType: string;
  snippet: ProductItemWithType;
  parent: string;
}) => {
  const { snippet, containerType, parent } = props;
  return (
    <div className={`info ${containerType}-snippet__info`}>
      {containerType === "products" ? (
        <>
          <Buttons containerType={"products"} />
          <Description containerType={containerType} snippet={snippet} />
          <Buy
            containerType={containerType}
            snippet={snippet}
            parent={parent}
          />
        </>
      ) : (
        <>
          <PriceProof
            containerType={containerType}
            snippet={snippet}
            parent={parent}
          />
          <TextBlock
            className={`product-name ${containerType}-product-name ${parent}__${containerType}-product-name`}
            snippet={snippet}
            snippetProperty={"name"}
          />
          <ProofContainer
            containerType={containerType}
            snippet={snippet}
            extraClass={"info"}
            parent={parent}
          />
          <BuyButton
            containerType={containerType}
            extraClass={`${containerType}-info`}
          />
        </>
      )}
    </div>
  );
};

export default Info;
