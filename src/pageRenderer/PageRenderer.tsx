import React from "react";
import { PageRendererType } from "../interfaces/types";
import CatalogPage from "../pages/catalog/CatalogPage";
import MainPage from "../pages/main/MainPage";

const PageRenderer = (props: PageRendererType) => {
  switch (props.page) {
    case "main":
      return <MainPage {...props} />;
    case "catalog":
      return <CatalogPage {...props} />;
    default:
      return <MainPage {...props} />;
  }
};

export default PageRenderer;
