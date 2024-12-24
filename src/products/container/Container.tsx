import React from "react";
import { ProductItemWithType } from "../../interfaces/types";
import Snippets from "./__Snippets/Snippets";

const Container = (props: {
  snippets: ProductItemWithType[];
  blockClass: string;
  title?: string;
}) => {
  return (
    <div className={`container ${props.blockClass}__container`}>
      {props.title && <h1 className="container-heading">{props.title}</h1>}
      <Snippets snippets={props.snippets} />
    </div>
  );
};

export default Container;
