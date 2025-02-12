import React, { useState } from "react";
import "./BuyButton.scss";
import CountButton from "../__CountButton/CountButton";

const BuyButton = (props: { containerType: string; extraClass: string }) => {
  const [count, setCount] = useState(0);
  const { containerType, extraClass } = props;

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }
  const extraClassName = `${extraClass}__buy-button`;

  return count === 0 ? (
    <button
      className={`buy-button ${containerType}-buy-button ${extraClassName}`}
      onClick={increment}
    >
      <div className="buy-text">{"В корзину"}</div>
    </button>
  ) : (
    <CountButton
      containerType={containerType}
      count={count}
      functions={[increment, decrement]}
      extraClass={extraClassName}
    />
  );
};

export default BuyButton;
