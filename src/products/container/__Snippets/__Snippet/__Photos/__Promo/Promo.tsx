import React from "react";
import "./Promo.scss";

const Promo = () => {
  return (
    <div className={"promo"}>
      <div className={"tag tag-up promo__up"}>{"- 50%"}</div>
      <div className={"tag tag-bottom promo__bottom"}></div>
    </div>
  );
};

export default Promo;
