import React from "react";
import "./Info.scss";
import { ProductItemWithType } from "../../../../../interfaces/types";
import Description from "./__Description/Description";
import Buy from "./__Buy/Buy";

const Info = (props: { blockClass: string; snippet: ProductItemWithType }) => {
  const { snippet, blockClass } = props;
  return (
    <div className={`info ${blockClass}-snippet-container__info`}>
      <Description blockClass={blockClass} snippet={snippet} />
      <Buy blockClass={blockClass} snippet={snippet} />
    </div>
  );
};

export default Info;
