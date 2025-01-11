import React from "react";
import "./Like.scss";

const Like = (props: { blockClass: string }) => {
  const { blockClass } = props;
  return <div className={`like ${blockClass}-like`}></div>;
};

export default Like;
