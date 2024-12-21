import React from "react";
import "./Menu.scss";
import { MenuItem } from "../../interfaces/types";

const Menu = (props: { items: MenuItem[]; navClass?: string }) => {
  return (
    <nav
      className={
        props.navClass
          ? `navigation ${props.navClass}__navigation`
          : "navigation"
      }
    >
      <menu
        className={props.navClass ? `menu ${props.navClass}__menu` : "menu"}
      >
        {props.items.map((item) => (
          <li key={item.id} className={`menu-item ${item.name}`}></li>
        ))}
      </menu>
    </nav>
  );
};

export default Menu;
