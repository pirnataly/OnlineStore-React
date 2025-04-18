import React, { useState } from "react";
import { FiltersProps } from "../../../../interfaces/types";
import "./Filters.scss";
import FiltersList from "./__FiltersList/FiltersList";

const Filters = ({ filters, viewportWidth }: FiltersProps) => {
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <div className={"filters"}>
      {viewportWidth <= 1090 ? (
        <button
          type="button"
          className={"filters__ico"}
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
            <FiltersList filters={filters} />
          </div>
        </button>
      ) : (
        <FiltersList filters={filters} />
      )}
    </div>
  );
};

export default Filters;
