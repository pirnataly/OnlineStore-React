import React from "react";
import { ProductItemWithType } from "../../../../../../interfaces/types";
import "./Description.scss";
import Like from "../../like/Like";
import TextBlock from "./__TextBlock/TextBlock";

const Description = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { snippet, containerType } = props;
  return (
    <div className={`description ${containerType}__description`}>
      <div className={"description-row description__up"}>
        <TextBlock
          className={`product-name ${containerType}-product-name description-row__name`}
          snippet={snippet}
          snippetProperty={"name"}
        />
        <Like containerType={containerType} />
      </div>
      <div className={"description-row description__bottom"}>
        <TextBlock
          className={"text description__text"}
          snippet={snippet}
          snippetProperty={"description"}
        />
      </div>
    </div>
  );
};

export default Description;
