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
  blockClass: string;
  snippet: ProductItemWithType;
}) => {
  const componentName: ComponentKeys = props.snippet.type;
  const SelectedComponent = components[componentName];
  const { blockClass } = props;

  return (
    <div className={`photos ${blockClass}-photos snippet__photos`}>
      <SelectedComponent {...props} />
      <Promo blockClass={blockClass} />
      {blockClass === "catalog" ? <Like blockClass={blockClass} /> : null}
    </div>
  );
};

export default Photos;
