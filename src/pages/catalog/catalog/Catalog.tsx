import React, {useMemo, useState} from "react";
import "./Catalog.scss";
import { CatalogProps } from "../../../interfaces/types";
import {getSnippetsWithTypeCard, sortBySelectedSort} from "../../../utils/utils";
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
  const [activeFilter, setActiveFilter] = useState('');

  function setNewActiveFilter(str:string){
    setActiveFilter(str)
  }

   const snippetsWithCardType = getSnippetsWithTypeCard(products);

  const sortedSnippets = useMemo(() => sortBySelectedSort(activeSort,snippetsWithCardType), [activeSort, snippetsWithCardType]);


  return (
    <div className="catalog">
      <HeadingAmount text={text} page={page} count={products.length} />
      {products.length !== 0 ? (
        <>
          <FiltersSorting
            viewportWidth={viewportWidth}
            activeSort={activeSort}
            setActiveSort={setActiveSort}
            activeFilter={activeFilter}
            setActiveFilter={setNewActiveFilter}
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
