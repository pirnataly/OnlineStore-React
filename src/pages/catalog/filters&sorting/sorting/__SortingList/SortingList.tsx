import React from "react";
import "./SortingList.scss";
import SortingItem from "../__SortingItem/SortingItem";
import { SortingListProps } from "../../../../../interfaces/types";

const SortingList = ({
  sorting,
  changeActiveState,
  active,
}: SortingListProps) => {
  return (
    <ul className={`sorting__list`}>
      {sorting.map((sortingName) => (
        <SortingItem
          active={active}
          func={changeActiveState}
          name={sortingName}
          key={sortingName}
        />
      ))}
    </ul>
  );
};

export default SortingList;
