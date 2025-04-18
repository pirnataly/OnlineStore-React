import React from "react";
import "./FilterItem.scss";
import { FilterItemName } from "../../../../../interfaces/types";

const FilterItem = ({ name }: FilterItemName) => {
  return (
    <li className={`filter-item`}>
      <span className={`filter-item__text`}>{name}</span>
      <img
        className={`filter-item__dropdown-ico`}
        alt={`dropdown-ico`}
        src={"icons/dropdown.svg"}
        onClick={() => {}}
      />
    </li>
  );
};

export default FilterItem;
