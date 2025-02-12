import React, { useEffect, useState } from "react";
import "./Promo.scss";
import { ProductItemWithType } from "../../../../../../interfaces/types";
import { object } from "../../../../../../data/constants/constants";

const Promo = (props: {
  containerType: string;
  snippet: ProductItemWithType;
}) => {
  const { containerType, snippet } = props;
  const [background, setBackground] = useState(getBackground());

  function getBackground() {
    if (snippet.promo) {
      return window.innerWidth > 376
        ? `${object[snippet.promo].background}`
        : `${object[snippet.promo].background_mobile}`;
    }
    return null;
  }

  useEffect(() => {
    const changeBackground = () => {
      setBackground(getBackground());
    };

    window.addEventListener("resize", changeBackground);
    return () => window.removeEventListener("resize", changeBackground);
  });

  if (snippet.promo) {
    return (
      <div className={`promo ${containerType}-snippet-container__promo`}>
        <div className={"tag tag-up promo__up"}>
          {object[snippet.promo].discount}
        </div>
        <div
          className={"tag tag-bottom promo__bottom"}
          style={
            background ? { background: background } : { background: "none" }
          }
        ></div>
      </div>
    );
  }
  return null;
};

export default Promo;
