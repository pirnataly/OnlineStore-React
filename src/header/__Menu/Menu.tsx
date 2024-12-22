import React from "react";
import "./Menu.scss";
import { menuItemProps } from "../../interfaces/types";
import Category from "../../banner&categories/__Categories/__Category/Category";

const Menu = (props: menuItemProps) => {
  return (
    <nav className={`${props.blockClass}__navigation`}>
      <menu className={`menu ${props.blockClass}__menu`}>
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
