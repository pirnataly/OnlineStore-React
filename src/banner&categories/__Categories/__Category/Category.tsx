import React from "react";
import "./Category.scss";
import ColoredLetters from "../../../header/__SearchWrapper/__SearchingPanel/ColoredLetters/ColoredLetters";

const Category = (props: {
  name: string;
  description: string;
  parentClass: string;
  value?: string;
}) => {
  return (
    <div className={`category ${props.parentClass}__category`}>
      <div className={`category-image img-${props.name}`}></div>
      <p className={`category-name ${props.parentClass}__category-name`}>
        <ColoredLetters
          str={props.description}
          val={props.value ? props.value : ""}
        />
      </p>
    </div>
  );
};

export default Category;
