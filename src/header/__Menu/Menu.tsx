import React, { useRef, useState } from "react";
import "./Menu.scss";
import { MenuItemProps } from "../../interfaces/types";
import Category from "../../banner&categories/__Categories/__Category/Category";

const Menu = (props: MenuItemProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const categoriesMenu = useRef<HTMLMenuElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!categoriesMenu.current) return;
    setIsDragging(true);
    setStartX(e.pageX - categoriesMenu.current.offsetLeft);
    setScrollLeft(categoriesMenu.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !categoriesMenu.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX;
    categoriesMenu.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <nav className={`${props.containerType}__navigation`}>
      <menu
        className={`menu ${props.containerType}__menu`}
        ref={categoriesMenu}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {props.items.map((item) => (
          <li
            key={item.id}
            className={`item ${props.itemType}-item ${item.name} `}
          >
            {item.description ? (
              <Category
                parentClass={props.containerType}
                name={item.name}
                description={item.description}
                value={props.value}
              />
            ) : null}
          </li>
        ))}
      </menu>
    </nav>
  );
};

export default Menu;
