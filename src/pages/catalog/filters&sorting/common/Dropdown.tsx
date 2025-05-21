import React from 'react';
import "./Dropdown.scss";
import {DropdownType} from "../../../../interfaces/types";

const DropdownList = ({dropOpen,child,parent}:DropdownType) => {
  return (
      <div
          className={
            dropOpen
                ? `${parent}-dropdown__list ${parent}-dropdown__list_active`
                : `${parent}-dropdown__list`
          }
      >
        {child}
      </div>
  );
};

export default DropdownList;