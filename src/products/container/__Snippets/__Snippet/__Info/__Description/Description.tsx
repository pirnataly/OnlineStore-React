import React from "react";
import { ProductItemWithType } from "../../../../../../interfaces/types";
import "./Description.scss";
import Like from "../../like/Like";

const Description = (props: {
  blockClass: string;
  snippet: ProductItemWithType;
}) => {
  const { snippet, blockClass } = props;
  return (
    <div className={`description ${blockClass}__description`}>
      <div className={"description-row description__up"}>
        <div className={"product-name description-row__name"}>
          {snippet.name}
        </div>

        <Like blockClass={blockClass} />
      </div>
      <div className={"description-row description__bottom"}>
        <div className={"text description__text"}>{snippet.description}</div>
      </div>
    </div>
  );
};

export default Description;
