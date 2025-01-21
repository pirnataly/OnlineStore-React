import React from "react";
import "./BuyButton.scss";

const BuyButton = (props: { containerType: string }) => {
  const { containerType } = props;
  return (
    <div className={`buy-button ${containerType}-buy-button`}>
      <div className={"buy__minus"}></div>
      <div className={`buy-text ${containerType}-buy-text`}>{"В корзину"}</div>
      <div className={"buy__plus"}></div>
    </div>
  );
};

export default BuyButton;
