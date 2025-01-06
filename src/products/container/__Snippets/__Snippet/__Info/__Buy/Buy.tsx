import React from "react";
import "./Buy.scss";
import { ProductItemWithType } from "../../../../../../interfaces/types";

const Buy = (props: { snippet: ProductItemWithType }) => {
  const { snippet } = props;
  return (
    <div className={"Buy"}>
      <div className={"price-proof"}>
        <div className={"price"}>
          <div
            className={"price-discount"}
          >{`${snippet.discount_price} ₽`}</div>
          <div
            className={"old-price price__old-price"}
          >{`${snippet.price} ₽`}</div>
        </div>
        <div className={"proof-container"}>
          <div className={"proof"}>
            <div className={"proof__text"}>{`${snippet.review_rating}`}</div>
            <div className={`proof__icon proof-star`}></div>
          </div>
          <div className={"proof"}>
            <div className={"proof__text"}>{`${snippet.likes}`}</div>
            <div className={`proof__icon proof-like`}></div>
          </div>
        </div>
      </div>

      <div className={"buy-button buy__button"}>
        <div className={"buy__minus"}></div>
        <div className={"buy-text"}>{"В корзину"}</div>
        <div className={"buy__plus"}></div>
      </div>
    </div>
  );
};

export default Buy;
