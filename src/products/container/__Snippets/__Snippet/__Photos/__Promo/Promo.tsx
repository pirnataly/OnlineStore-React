import React, { useEffect, useState } from "react";
import { promoObject } from "../../../../../../data/constants/constants";
import "./Promo.scss";
import { ProductItemWithType } from "../../../../../../interfaces/types";

const Promo = (props: {
  containerType: string;
  snippet: ProductItemWithType;
  parent: string;
}) => {
  const { containerType, snippet, parent } = props;
  const [background, setBackground] = useState(getBackground());

  function getBackground() {
    if (snippet.promo && parent === "main") {
      return window.innerWidth > 376
        ? `${promoObject[snippet.promo].background}`
        : `${promoObject[snippet.promo].background_mobile}`;
    }
    if (snippet.promo && parent === "catalog") {
      return `${promoObject[snippet.promo].background_mobile}`;
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
      <div
        className={`promo ${containerType}-snippet-container__promo ${parent}__${containerType}-snippet-container__promo`}
      >
        <div
          className={`tag ${containerType}-tag-up ${parent}__${containerType}-tag-up promo__up`}
        >
          {promoObject[snippet.promo].discount}
        </div>
        <div
          className={`tag ${containerType}-tag-bottom  promo__bottom`}
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
