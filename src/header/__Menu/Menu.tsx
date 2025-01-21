import React from "react";
import "./Menu.scss";
import { MenuItemProps } from "../../interfaces/types";
import Category from "../../banner&categories/__Categories/__Category/Category";

const Menu = (props: MenuItemProps) => {
  return (
    <nav className={`${props.containerType}__navigation`}>
      <menu className={`menu ${props.containerType}__menu`}>
        {props.items.map((item) => (
          <li
            key={item.id}
            className={`item ${props.itemType}-item ${item.name}`}
          >
            {item.description ? (
              <Category name={item.name} description={item.description} />
            ) : null}
          </li>
        ))}
      </menu>
    </nav>
  );
};

export default Menu;
