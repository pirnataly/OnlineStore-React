import React from "react";
import "./BuyButton.scss";

const BuyButton = (props: { containerType: string; extraClass: string }) => {
  const { containerType, extraClass } = props;
  const extraClassName = extraClass ? `${extraClass}__buy-button` : null;

  return (
    <div className={`buy-button ${containerType}-buy-button ${extraClassName}`}>
      <div className={"buy__minus"}></div>
      <div className={`buy-text ${containerType}-buy-text`}>{"В корзину"}</div>
      <div className={"buy__plus"}></div>
    </div>
  );
};

export default BuyButton;
