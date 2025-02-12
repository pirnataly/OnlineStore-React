import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className={"footer"}>
      <div className={"text-container homepage footer__homepage"}>
        <span className={"homepage-item"}>© 2023 Магаз</span>
      </div>
      <div className={"text-container social-networks footer__social-networks"}>
        <div className={"email"}>support@magaz.ru</div>
        <div className={"media"}>
          <div className={"media-item telegram"}></div>
          <div className={"media-item dzen"}></div>
          <div className={"media-item youtube"}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
