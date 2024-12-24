import React from "react";
import { ProductItemWithType } from "../../../interfaces/types";
import "./Snippets.scss";

const Snippets = (props: { snippets: ProductItemWithType[] }) => {
  return (
    <>
      {props.snippets.map((snippet: ProductItemWithType) => (
        <div key={snippet.id} className={"snippet-container"}>
          <div className={`photos`}>
            <div
              className={`photo-double_left ${snippet.id} ${snippet.id}_left`}
            ></div>
            <div
              className={`photo-double_right ${snippet.id} ${snippet.id}_right`}
            ></div>
          </div>
          <div className={"info"}>{snippet.description}</div>
        </div>
      ))}
    </>
  );
};

export default Snippets;
