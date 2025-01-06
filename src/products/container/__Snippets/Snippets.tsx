import React from "react";
import { ProductItemWithType } from "../../../interfaces/types";
import Snippet from "./__Snippet/Snippet";

const Snippets = (props: { snippets: ProductItemWithType[] }) => {
  return (
    <>
      {props.snippets.map((snippet: ProductItemWithType) => (
        <Snippet key={snippet.id} snippet={snippet} />
      ))}
    </>
  );
};

export default Snippets;
