import React from "react";
import "./HeadingAmount.scss";
import PageHeading from "./__PageHeading/PageHeading";
import { PageHeadingProps } from "../../../interfaces/types";
import Amount from "./__Amount/Amount";

const HeadingAmount = ({ text, page, count }: PageHeadingProps) => {
  return (
    <div className={`heading-amount ${page}__heading-amount`}>
      <PageHeading text={text} page={page} />
      <Amount text={String(count)} page={page} />
    </div>
  );
};

export default HeadingAmount;
