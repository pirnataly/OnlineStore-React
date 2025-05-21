import React from "react";
import "./FilterItem.scss";
import { FilterItemName } from "../../../../../interfaces/types";

const FilterItem = ({ name,setActiveFilter }: FilterItemName) => {
  return (
    <li className={`filter-item`} onClick={() => {console.log(name);setActiveFilter(name)}}>
      <span className={`filter-item__text`}>{name}</span>
      <img
        className={`filter-item__dropdown-ico`}
        alt={`dropdown-ico`}
        src={"icons/dropdown.svg"}
      />
    </li>
  );
};

export default FilterItem;
