import React from "react";
import "./Like.scss";

const Like = (props: { containerType: string }) => {
  const { containerType } = props;
  return <div className={`like ${containerType}-like`}></div>;
};

export default Like;
