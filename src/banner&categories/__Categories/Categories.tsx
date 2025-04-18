import React from "react";
import "./Categories.scss";
import { MenuItemProps } from "../../interfaces/types";
import Menu from "../../header/__Menu/Menu";

const Categories = (props: MenuItemProps) => {
  return (
    <div className={`${props.containerType}__categories categories`}>
      <Menu
        items={props.items}
        containerType={props.containerType}
        itemType={props.itemType}
        value={props.value}
        func={props.func}
      />
    </div>
  );
};

export default Categories;
