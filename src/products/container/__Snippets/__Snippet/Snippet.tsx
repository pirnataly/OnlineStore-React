import React from "react";
import { ProductItemWithType } from "../../../../interfaces/types";
import "./Snippet.scss";
import Info from "./__Info/Info";
import Photos from "./__Photos/Photos";

const Snippet = (props: {
  blockClass: string;
  snippet: ProductItemWithType;
}) => {
  const { blockClass, snippet } = props;

  return (
    <div className={`${blockClass}-snippet-container snippet`}>
      <Photos blockClass={blockClass} snippet={snippet} />
      <Info blockClass={blockClass} snippet={snippet} />
    </div>
  );
};

export default Snippet;
