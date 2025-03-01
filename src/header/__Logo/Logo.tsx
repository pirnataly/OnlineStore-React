import React from "react";
import "./Logo.scss";

const Logo = ({
  text,
  changePage,
  parent,
}: {
  text: string;
  changePage: (str: string) => void;
  parent: string;
}) => {
  return (
    <div className={`logo ${parent}__logo`} onClick={() => changePage("main")}>
      <span className={"logo__text"}>{text}</span>
    </div>
  );
};

export default Logo;
