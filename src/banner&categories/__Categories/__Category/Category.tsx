import React from "react";
import "./Category.scss";
import ColoredLetters from "../../../header/__SearchWrapper/__SearchingPanel/ColoredLetters/ColoredLetters";
import { CategoryProps } from "../../../interfaces/types";

const Category = (props: CategoryProps) => {
  return (
    <div
      className={` category ${props.parentClass}__category`}
      onClick={() => {
        props.func({ name: props.name, description: props.description });
      }}
    >
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
