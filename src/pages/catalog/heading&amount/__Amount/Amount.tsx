import React from "react";
import "./Amount.scss";
import { PageHeadingProps } from "../../../../interfaces/types";

const Amount = ({ text, page }: PageHeadingProps) => {
  return <div className={`amount ${page}__amount`}>{text}</div>;
};

export default Amount;
