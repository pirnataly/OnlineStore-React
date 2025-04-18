import React from "react";
import "./PageHeading.scss";
import { PageHeadingProps } from "../../../../interfaces/types";
import { capitalize } from "../../../../utils/utils";

const PageHeading = ({ text, page }: PageHeadingProps) => {
  return (
    <h2 className={`page-heading ${page}__page-heading`}>{capitalize(text)}</h2>
  );
};

export default PageHeading;
