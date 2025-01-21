import React from "react";
import products from "../../src/data/products.json";
import containers from "../../src/data/containers-config.json";
import { ContainerConfig, ProductItem } from "../interfaces/types";
import { getProductsWithType } from "../utils/utils";
import "./Products.scss";
import Container from "./container/Container";

const Products = () => {
  const productsItems = products as ProductItem[];
  const containersArray = containers as ContainerConfig[];

  return (
    <section className={"products"}>
      {containersArray.map(
        ({ id, containerType, snippets, title, title_id }) => (
          <Container
            key={id}
            containerType={containerType}
            snippets={getProductsWithType(productsItems, snippets)}
            title={title}
            title_id={title_id}
          />
        ),
      )}
    </section>
  );
};

export default Products;
