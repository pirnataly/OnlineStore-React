import React, { useEffect, useState } from "react";
import "./Sorting.scss";
import { SortingProps } from "../../../../interfaces/types";
import SortingList from "./__SortingList/SortingList";

const Sorting = ({
  sorting,
  viewportWidth,
  activeSort,
  setActiveSort,
}: SortingProps) => {
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    function closeList(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest(".sorting")) {
        return;
      } else {
        setDropOpen(false);
      }
    }

    document.addEventListener("click", closeList);
    return () => {
      document.removeEventListener("click", closeList);
    };
  }, []);

  function changeActiveState(nameOfSortingItem: string) {
    setActiveSort(nameOfSortingItem);
  }

  return (
    <div className={"sorting"}>
      {viewportWidth <= 1090 ? (
        <button
          type="button"
          className={"dropdown"}
          onClick={() => {
            setDropOpen(!dropOpen);
          }}
        >
          <div
            className={
              dropOpen
                ? "dropdown__list dropdown__list_active"
                : "dropdown__list"
            }
          >
            <SortingList
              sorting={sorting}
              changeActiveState={changeActiveState}
              activeSort={activeSort}
            />
          </div>
          <span className={"sort-text"}>{activeSort}</span>
          <div className={"dropdown-arrow"}></div>
        </button>
      ) : (
        <SortingList
          sorting={sorting}
          changeActiveState={changeActiveState}
          activeSort={activeSort}
        />
      )}
    </div>
  );
};

export default Sorting;
