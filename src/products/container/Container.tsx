import React from "react";
import { ContainerConfigWithSnippetsTypes } from "../../interfaces/types";
import Snippets from "./__Snippets/Snippets";
import "./Container.scss";
import Heading from "./__Heading/Heading";

const Container = (props: ContainerConfigWithSnippetsTypes) => {
  return (
    <div className={`container ${props.blockClass}__container`}>
      {props.title && props.title_id && (
        <Heading
          title={props.title}
          title_id={props.title_id.toLowerCase()}
          blockClass={props.blockClass}
        />
      )}
      <Snippets blockClass={props.blockClass} snippets={props.snippets} />
    </div>
  );
};

export default Container;
