import React from "react";
import "./SortingItem.scss";
import { SortingItemName } from "../../../../../interfaces/types";

const SortingItem = ({ name, func, activeSort }: SortingItemName) => {
  const classes =
    name === activeSort ? `sorting-item sorting-item_active` : `sorting-item`;

  return (
    <li className={classes} onClick={() => func(name)}>
      {name}
    </li>
  );
};

export default SortingItem;
