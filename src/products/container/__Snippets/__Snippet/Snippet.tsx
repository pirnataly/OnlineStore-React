import React from "react";
import { ProductItemWithType } from "../../../../interfaces/types";
import "./Snippet.scss";
import Info from "./__Info/Info";
import Photos from "./__Photos/Photos";

const Snippet = (props: {
  containerType: string;
  snippet: ProductItemWithType;
  parent: string;
}) => {
  const { containerType, snippet, parent } = props;

  return (
    <div className={`snippet ${containerType}-snippet`}>
      <Photos containerType={containerType} snippet={snippet} parent={parent} />
      <Info containerType={containerType} snippet={snippet} parent={parent} />
    </div>
  );
};

export default Snippet;
