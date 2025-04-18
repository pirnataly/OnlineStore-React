import React from "react";
import "./Logo.scss";
import { LogoProps, Pages } from "../../interfaces/types";

const Logo = ({ logoText, changePage, parent }: LogoProps) => {
  return (
    <div
      className={`logo ${parent}__logo`}
      onClick={() => {
        changePage(Pages.main);
      }}
    >
      <span className={"logo__text"}>{logoText}</span>
    </div>
  );
};

export default Logo;
