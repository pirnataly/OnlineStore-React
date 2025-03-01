import React from "react";
import BannerAndCategories from "../banner&categories/BannerAndCategories";
import Products from "../products/Products";
import Catalog from "../pages/catalog/Catalog";
import { Pages } from "../interfaces/types";

const PageRenderer = (props: { page: Pages; text: string }) => {
  switch (props.page) {
    case "main":
      return (
        <>
          <BannerAndCategories />
          <Products parent={props.page} />
        </>
      );
    case "catalog":
      return <Catalog page={props.page} text={"Магия"} />;
    default:
      return (
        <>
          <BannerAndCategories />
          <Products parent={props.page} />
        </>
      );
  }
};

export default PageRenderer;
