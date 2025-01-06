import React from "react";
import "./Info.scss";
import { ProductItemWithType } from "../../../../../interfaces/types";
import Description from "./__Description/Description";
import Buy from "./__Buy/Buy";

const Info = (props: { snippet: ProductItemWithType }) => {
  const { snippet } = props;
  return (
    <div className={"info snippet-container__info"}>
      <Description snippet={snippet} />
      <Buy snippet={snippet} />
    </div>
  );
};

export default Info;
