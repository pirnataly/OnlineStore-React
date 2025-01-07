import React from "react";
import { ComponentKeys, ComponentProps } from "../../../../../interfaces/types";
import "./Photos.scss";
import Promo from "./__Promo/Promo";
import { components } from "../../../../../data/constants/constants";

const Photos = (props: ComponentProps) => {
  const componentName: ComponentKeys = props.snippet.type;
  const SelectedComponent = components[componentName];

  return (
    <div className={`photos snippet__photos`}>
      <SelectedComponent {...props} />
      <Promo />
    </div>
  );
};

export default Photos;
