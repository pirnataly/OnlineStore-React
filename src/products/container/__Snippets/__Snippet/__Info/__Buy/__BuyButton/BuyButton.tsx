import React from "react";
import "./BuyButton.scss";

const BuyButton = (props: { blockClass: string }) => {
  const { blockClass } = props;
  return (
    <div className={`buy-button ${blockClass}-buy-button`}>
      <div className={"buy__minus"}></div>
      <div className={`buy-text ${blockClass}-buy-text`}>{"В корзину"}</div>
      <div className={"buy__plus"}></div>
    </div>
  );
};

export default BuyButton;
