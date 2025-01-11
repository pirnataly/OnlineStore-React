import React from "react";
import { ProductItemWithType } from "../../../interfaces/types";
import Snippet from "./__Snippet/Snippet";

const Snippets = (props: {
  blockClass: string;
  snippets: ProductItemWithType[];
}) => {
  const { blockClass } = props;

  return (
    <div className={`${props.blockClass}-snippets`}>
      {props.snippets.map((snippet: ProductItemWithType) => (
        <Snippet key={snippet.id} blockClass={blockClass} snippet={snippet} />
      ))}
    </div>
  );
};

export default Snippets;
