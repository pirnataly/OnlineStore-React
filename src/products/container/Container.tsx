import React from "react";
import { ProductItemWithType } from "../../interfaces/types";
import Snippets from "./__Snippets/Snippets";
import "./Container.scss";
import Heading from "./__Heading/Heading";

const Container = (props: {
  snippets: ProductItemWithType[];
  blockClass: string;
  title?: string;
  title_id?: string;
}) => {
  return (
    <div className={`container ${props.blockClass}__container`}>
      {props.title && props.title_id && (
        <Heading
          title={props.title}
          title_id={props.title_id}
          blockClass={props.blockClass}
        />
      )}
      <Snippets snippets={props.snippets} />
    </div>
  );
};

export default Container;
