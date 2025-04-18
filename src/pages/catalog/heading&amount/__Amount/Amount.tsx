import React from "react";
import "./Amount.scss";
import { PageHeadingProps } from "../../../../interfaces/types";
import { getEndOfAmount } from "../../../../utils/utils";

const Amount = ({ text, page }: PageHeadingProps) => {
  return (
    <div className={`amount ${page}__amount`}>
      {text} {getEndOfAmount(text)}
    </div>
  );
};

export default Amount;
