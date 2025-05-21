import React from "react";
import "./FiltersList.scss";
import FilterItem from "../__FilterItem/FilterItem";
import { FiltersListProps } from "../../../../../interfaces/types";

const FiltersList = ({ filters,setActiveFilter }: FiltersListProps) => {
  return (
    <ul className={"filters__list"}>
      {filters.map((filterName) => (
        <FilterItem name={filterName} key={filterName} setActiveFilter={setActiveFilter}/>
      ))}
    </ul>
  );
};

export default FiltersList;
