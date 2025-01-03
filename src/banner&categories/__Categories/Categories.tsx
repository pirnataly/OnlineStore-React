import React from "react";
import "./Categories.scss";
import { MenuItemProps } from "../../interfaces/types";
import Menu from "../../header/__Menu/Menu";

const Categories = (props: MenuItemProps) => {
  return (
    <div className={`${props.blockClass}__categories categories`}>
      <Menu
        items={props.items}
        blockClass={"categories"}
        itemType={props.itemType}
      />
    </div>
  );
};

export default Categories;
