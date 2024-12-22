import React from "react";
import "./Category.scss";

const Category = (props: { name: string; description: string }) => {
  return (
    <div className={"category"}>
      <div className={`category-image img-${props.name}`}></div>
      <p className={"category-name"}>{props.description}</p>
    </div>
  );
};

export default Category;
