import React from "react";
import "./Like.scss";

const Like = (props: { containerType: string; extraClass: string }) => {
  const { containerType, extraClass } = props;
  return (
    <div className={`like ${containerType}-like ${extraClass}__like`}></div>
  );
};

export default Like;
