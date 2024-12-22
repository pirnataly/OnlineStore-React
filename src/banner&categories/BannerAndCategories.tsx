import React from "react";
import Banner from "./__Banner/Banner";
import Categories from "./__Categories/Categories";
import { MenuItem } from "../interfaces/types";
import categories from "../data/categories.json";
import "../banner&categories/BannerAndCategories.scss";

const BannerAndCategories = () => {
  const categoryItems =
    categories.length !== 0 ? (categories as MenuItem[]) : [];
  return (
    <main className={"main"}>
      <Banner />
      <Categories
        items={categoryItems}
        blockClass={"main"}
        itemType={"category"}
      />
    </main>
  );
};

export default BannerAndCategories;