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
            <div className={"promo"}></div>
          </div>
          <div className={"info snippet-container__info"}>
            <div className={"description"}>
              <div className={"description-row description__up"}>
                <div className={"product-name description-row__name"}>
                  {snippet.name}
                </div>
                <div className={"like"}></div>
              </div>
              <div className={"description-row description__bottom"}>
                <p className={"text description__text"}>
                  {snippet.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Snippets;
