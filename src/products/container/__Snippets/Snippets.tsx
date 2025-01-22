import React from "react";
import { ProductItemWithType } from "../../../interfaces/types";
import Snippet from "./__Snippet/Snippet";
import "./Snippets.scss";

const Snippets = (props: {
  containerType: string;
  snippets: ProductItemWithType[];
}) => {
  const { containerType } = props;

  return (
    <div className={`${props.containerType}-snippets`}>
      {props.snippets.map((snippet: ProductItemWithType) => (
        <Snippet
          key={snippet.id}
          containerType={containerType}
          snippet={snippet}
        />
      ))}
    </div>
  );
};

export default Snippets;
