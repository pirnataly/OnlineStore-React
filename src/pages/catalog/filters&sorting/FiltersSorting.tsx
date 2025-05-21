import React from "react";
import "./FiltersSorting.scss";
import Filters from "./filters/Filters";
import {filters, sorting} from "../../../data/constants/constants";
import Sorting from "./sorting/Sorting";
import {FiltersSortingProps} from "../../../interfaces/types";

const FiltersSorting = ({
                          viewportWidth,
                          activeSort,
                          setActiveSort,
                          activeFilter,
                          setActiveFilter
                        }: FiltersSortingProps) => {
  return (
      <div className={`filters-sorting`}>
        <Filters filters={filters} viewportWidth={viewportWidth} activeFilter={activeFilter}
                 setActiveFilter={setActiveFilter}/>
        <Sorting
            sorting={sorting}
            viewportWidth={viewportWidth}
            activeSort={activeSort}
            setActiveSort={setActiveSort}
        />
      </div>
  );
};

export default FiltersSorting;
