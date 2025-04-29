import React from "react";
import "./Catalog.scss";
import { CatalogProps } from "../../../interfaces/types";
import { getSnippetsWithTypeCard } from "../../../utils/utils";
import HeadingAmount from "../heading&amount/HeadingAmount";
import FiltersSorting from "../filters&sorting/FiltersSorting";
import Snippets from "../../../products/container/__Snippets/Snippets";
import NotFound from "../notFound/NotFound";

const Catalog = ({ page, text, products, viewportWidth }: CatalogProps) => {
  const snippetsWithCardType = getSnippetsWithTypeCard(products);

  return (
    <div className="catalog">
      <HeadingAmount text={text} page={page} count={products.length} />
      {products.length !== 0 ? (
        <>
          <FiltersSorting viewportWidth={viewportWidth} />
          <Snippets
            containerType={"catalog"}
            snippets={snippetsWithCardType}
            parent={page}
          />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Catalog;
