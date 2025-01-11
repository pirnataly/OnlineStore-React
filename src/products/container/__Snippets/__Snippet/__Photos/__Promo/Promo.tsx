import React from "react";
import "./Promo.scss";

const Promo = (props: { blockClass: string }) => {
  const { blockClass } = props;
  return (
    <div className={`promo ${blockClass}-snippet-container__promo`}>
      <div className={"tag tag-up promo__up"}>{"- 50%"}</div>
      <div className={"tag tag-bottom promo__bottom"}></div>
    </div>
  );
};

export default Promo;
