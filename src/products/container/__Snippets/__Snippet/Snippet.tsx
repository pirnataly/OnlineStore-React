import React from "react";
import { componentProps } from "../../../../interfaces/types";
import "./Snippet.scss";
import Info from "./__Info/Info";
import Photos from "./__Photos/Photos";

const Snippet = (props: componentProps) => {
  const { snippet } = props;

  return (
    <div className={"snippet-container snippet"}>
      <Photos snippet={snippet} />
      <Info snippet={snippet} />
    </div>
  );
};

export default Snippet;
