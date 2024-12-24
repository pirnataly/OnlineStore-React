import React from "react";
import products from "../../src/data/products.json";
import config from "../../src/data/products-config.json";
import { ProductItem, ProductItemWithType } from "../interfaces/types";
import { getProductsWithType } from "../utils/utils";
import "../products/Products.scss";
import Container from "./container/Container";

const Products = () => {
  const productsItems = products as ProductItem[];
  const productsConfig = config as ProductItemWithType[];
  const productsItemsArray = getProductsWithType(productsItems, productsConfig);

  return (
    <section className={"products"}>
      <Container
        blockClass={"products"}
        snippets={productsItemsArray}
        title={"Сокровищные сокровища"}
      />
    </section>
  );
};

export default Products;
