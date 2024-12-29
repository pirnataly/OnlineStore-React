import React from "react";
import { ProductItemWithType } from "../../../interfaces/types";
import "./Snippets.scss";

const Snippets = (props: { snippets: ProductItemWithType[] }) => {
  return (
    <>
      {props.snippets.map((snippet: ProductItemWithType) => (
        <div key={snippet.id} className={"snippet-container snippet"}>
          <div className={`photos snippet__photos`}>
            <div
              className={`photo-double_left ${snippet.id} ${snippet.id}_left`}
            ></div>
            <div
              className={`photo-double_right ${snippet.id} ${snippet.id}_right`}
            ></div>
            <div className={"promo"}>
              <div className={"tag tag-up promo__up"}>{"- 50%"}</div>
              <div className={"tag tag-bottom promo__bottom"}></div>
            </div>
          </div>

          <div className={"info snippet-container__info"}>
            <div className={"description snippet__description"}>
              <div className={"description-row description__up"}>
                <div className={"product-name description-row__name"}>
                  {snippet.name}
                </div>
                <div className={"like"}></div>
              </div>
              <div className={"description-row description__bottom"}>
                <div className={"text description__text"}>
                  {snippet.description}
                </div>
              </div>
            </div>
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
                    <div
                      className={"proof__text"}
                    >{`${snippet.review_rating}`}</div>
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
          </div>
        </div>
      ))}
    </>
  );
};

export default Snippets;
