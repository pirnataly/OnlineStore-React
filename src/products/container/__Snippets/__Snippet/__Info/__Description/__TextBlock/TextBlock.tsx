import React from "react";
import { ProductItemWithType } from "../../../../../../../interfaces/types";
import "./TextBlock.scss";

const TextBlock = (props: {
  className: string;
  snippet: ProductItemWithType;
  snippetProperty: "name" | "description";
}) => {
  const { className, snippet, snippetProperty } = props;
  return <div className={className}>{snippet[snippetProperty]}</div>;
};

export default TextBlock;
