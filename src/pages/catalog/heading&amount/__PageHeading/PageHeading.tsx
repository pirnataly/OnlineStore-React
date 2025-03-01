import React from "react";
import "./PageHeading.scss";
import { PageHeadingProps } from "../../../../interfaces/types";

const PageHeading = ({ text, page }: PageHeadingProps) => {
  return <h2 className={`page-heading ${page}__page-heading`}>{text}</h2>;
};

export default PageHeading;
