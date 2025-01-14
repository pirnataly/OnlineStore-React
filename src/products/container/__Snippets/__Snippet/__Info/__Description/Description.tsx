import React from "react";
import { ProductItemWithType } from "../../../../../../interfaces/types";
import "./Description.scss";
import Like from "../../like/Like";
import TextBlock from "./__TextBlock/TextBlock";

const Description = (props: {
  blockClass: string;
  snippet: ProductItemWithType;
}) => {
  const { snippet, blockClass } = props;
  return (
    <div className={`description ${blockClass}__description`}>
      <div className={"description-row description__up"}>
        <TextBlock
          className={"product-name description-row__name"}
          snippet={snippet}
          snippetProperty={"name"}
        />
        <Like blockClass={blockClass} />
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
