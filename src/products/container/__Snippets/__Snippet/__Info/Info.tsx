import React from "react";
import "./Info.scss";
import { ProductItemWithType } from "../../../../../interfaces/types";
import Description from "./__Description/Description";
import Buy from "./__Buy/Buy";
import PriceProof from "./__Buy/price&proof/PriceProof";
import TextBlock from "./__Description/__TextBlock/TextBlock";
import BuyButton from "./__Buy/__BuyButton/BuyButton";

const Info = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { snippet, containerType } = props;
  return (
    <div className={`info ${containerType}-snippet__info`}>
      {containerType === "products" ? (
        <>
          {" "}
          <Description containerType={containerType} snippet={snippet} />
          <Buy containerType={containerType} snippet={snippet} />
        </>
      ) : (
        <>
          <PriceProof containerType={containerType} snippet={snippet} />
          <TextBlock
            className={`product-name ${containerType}-product-name `}
            snippet={snippet}
            snippetProperty={"name"}
          />
          <BuyButton containerType={containerType} />
        </>
      )}
    </div>
  );
};

export default Info;
