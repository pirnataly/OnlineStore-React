import React from "react";
import "./Info.scss";
import { ProductItemWithType } from "../../../../../interfaces/types";
import Description from "./__Description/Description";
import Buy from "./__Buy/Buy";
import PriceProof from "./__Buy/price&proof/PriceProof";
import TextBlock from "./__Description/__TextBlock/TextBlock";
import BuyButton from "./__Buy/__BuyButton/BuyButton";

const Info = (props: { blockClass: string; snippet: ProductItemWithType }) => {
  const { snippet, blockClass } = props;
  return (
    <div className={`info ${blockClass}-snippet-container__info`}>
      {blockClass === "products" ? (
        <>
          {" "}
          <Description blockClass={blockClass} snippet={snippet} />
          <Buy blockClass={blockClass} snippet={snippet} />
        </>
      ) : (
        <>
          <PriceProof blockClass={blockClass} snippet={snippet} />
          <TextBlock
            className={`${blockClass}-product-name`}
            snippet={snippet}
            snippetProperty={"name"}
          />
          <BuyButton blockClass={blockClass} />
        </>
      )}
    </div>
  );
};

export default Info;
