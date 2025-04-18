import React from "react";
import Banner from "./__Banner/Banner";
import Categories from "./__Categories/Categories";
import { ChangeCategoryFunc, MenuItem } from "../interfaces/types";
import categories from "../data/categories.json";
import "../banner&categories/BannerAndCategories.scss";

const BannerAndCategories = (props: { func: ChangeCategoryFunc }) => {
  const categoryItems =
    categories.length !== 0 ? (categories as MenuItem[]) : [];
  return (
    <main className={"main"}>
      <Banner />
      <Categories
        items={categoryItems}
        containerType={"main"}
        itemType={"category"}
        func={props.func}
      />
    </main>
  );
};

export default BannerAndCategories;
