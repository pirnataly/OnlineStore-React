import React from "react";
import {
  ComponentKeys,
  ProductItemWithType,
} from "../../../../../interfaces/types";
import "./Photos.scss";
import Promo from "./__Promo/Promo";
import { components } from "../../../../../data/constants/constants";
import Like from "../like/Like";

const Photos = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const componentName: ComponentKeys = props.snippet.type;
  const SelectedComponent = components[componentName];
  const { containerType } = props;

  return (
    <div className={`photos snippet__photos ${containerType}-snippet__photos `}>
      <SelectedComponent {...props} />
      <Promo containerType={containerType} />
      {containerType === "catalog" ? (
        <Like containerType={containerType} />
      ) : null}
    </div>
  );
};

export default Photos;
