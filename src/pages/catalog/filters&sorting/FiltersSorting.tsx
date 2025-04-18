import React from "react";
import "./FiltersSorting.scss";
import Filters from "./filters/Filters";
import { filters, sorting } from "../../../data/constants/constants";
import Sorting from "./sorting/Sorting";
import { FiltersSortingProps } from "../../../interfaces/types";

const FiltersSorting = ({ viewportWidth }: FiltersSortingProps) => {
  const filtersArray = filters;
  const sortingArray = sorting;

  return (
    <div className={`filters-sorting`}>
      <Filters filters={filtersArray} viewportWidth={viewportWidth} />
      <Sorting sorting={sortingArray} viewportWidth={viewportWidth} />
    </div>
  );
};

export default FiltersSorting;
