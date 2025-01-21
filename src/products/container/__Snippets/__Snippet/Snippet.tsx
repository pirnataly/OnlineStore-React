import React from "react";
import { ProductItemWithType } from "../../../../interfaces/types";
import "./Snippet.scss";
import Info from "./__Info/Info";
import Photos from "./__Photos/Photos";

const Snippet = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { containerType, snippet } = props;

  return (
    <div className={`snippet ${containerType}-snippet`}>
      <Photos containerType={containerType} snippet={snippet} />
      <Info containerType={containerType} snippet={snippet} />
    </div>
  );
};

export default Snippet;
