import React from "react";
import "./Catalog.scss";
import Snippets from "../../products/container/__Snippets/Snippets";
import products from "../../data/products.json";
import { Pages, ProductItem } from "../../interfaces/types";
import { getSnippetsWithTypeCard } from "../../utils/utils";
import HeadingAmount from "./heading&amount/HeadingAmount";

const Catalog = (props: { page: Pages; text: string }) => {
  const snippets = products as ProductItem[];
  const snippetsWithCardType = getSnippetsWithTypeCard(snippets);

  return (
    <div className="catalog">
      <HeadingAmount text={props.text} page={props.page} />
      <Snippets
        containerType={"catalog"}
        snippets={snippetsWithCardType}
        parent={props.page}
      />
    </div>
  );
};

export default Catalog;
