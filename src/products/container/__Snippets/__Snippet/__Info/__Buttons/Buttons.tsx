import React from "react";
import "./Buttons.scss";
import BuyButton from "../__Buy/__BuyButton/BuyButton";
import Like from "../../like/Like";

const Buttons = (props: { containerType: string }) => {
  const { containerType } = props;

  return (
    <div className={`buttons info__buttons`}>
      <BuyButton containerType={containerType} extraClass="info" />
      <Like containerType={containerType} extraClass="info" />
    </div>
  );
};

export default Buttons;
