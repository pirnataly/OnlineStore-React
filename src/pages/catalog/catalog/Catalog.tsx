import React, { useMemo } from "react";
import "./Catalog.scss";
import { CatalogProps } from "../../../interfaces/types";
import { getSnippetsWithTypeCard } from "../../../utils/utils";
import HeadingAmount from "../heading&amount/HeadingAmount";
import FiltersSorting from "../filters&sorting/FiltersSorting";
import Snippets from "../../../products/container/__Snippets/Snippets";
import NotFound from "../notFound/NotFound";

const Catalog = ({
  page,
  text,
  products,
  viewportWidth,
  activeSort,
  setActiveSort,
}: CatalogProps) => {
  const snippetsWithCardType = getSnippetsWithTypeCard(products);

  const sortedSnippets = useMemo(() => {
    let result;
    switch (activeSort) {
      case "Популярные":
        result = [...snippetsWithCardType].sort(
          (a, b) => Number(b["likes"]) - Number(a["likes"]),
        );
        break;
      // full_price временно
      case "Подороже":
        result = [...snippetsWithCardType].sort(
          (a, b) => Number(b["full_price"]) - Number(a["full_price"]),
        );
        break;
      case "Подешевле":
        result = [...snippetsWithCardType].sort(
          (a, b) => Number(a["full_price"]) - Number(b["full_price"]),
        );
        break;
      case "С высоким рейтингом":
        result = [...snippetsWithCardType].sort(
          (a, b) => Number(b["review_rating"]) - Number(a["review_rating"]),
        );
        break;
      default:
        result = snippetsWithCardType;
    }
    return result;
  }, [activeSort, snippetsWithCardType]);

  return (
    <div className="catalog">
      <HeadingAmount text={text} page={page} count={products.length} />
      {products.length !== 0 ? (
        <>
          <FiltersSorting
            viewportWidth={viewportWidth}
            activeSort={activeSort}
            setActiveSort={setActiveSort}
          />
          <Snippets
            containerType={"catalog"}
            snippets={sortedSnippets}
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
