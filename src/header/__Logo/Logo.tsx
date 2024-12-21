import React from "react";
import "./Logo.scss";

const Logo = ({ text }: { text: string }) => {
  return (
    <div className={"logo"}>
      <span className={"logo__text"}>{text}</span>
    </div>
  );
};

export default Logo;
