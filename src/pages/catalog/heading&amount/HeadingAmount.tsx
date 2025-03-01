import React from "react";
import "./HeadingAmount.scss";
import PageHeading from "./__PageHeading/PageHeading";
import { PageHeadingProps } from "../../../interfaces/types";
import Amount from "./__Amount/Amount";

const HeadingAmount = ({ text, page }: PageHeadingProps) => {
  return (
    <div className={`heading-amount ${page}__heading-amount`}>
      <PageHeading text={text} page={page} />
      <Amount text={"12 поросят"} page={page} />
    </div>
  );
};

export default HeadingAmount;
