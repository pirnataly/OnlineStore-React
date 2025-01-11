import React from "react";
import "./Single.scss";
import { ProductItemWithType } from "../../../../../../../interfaces/types";

const Single = (props: {
  blockClass: string;
  snippet: ProductItemWithType;
}) => {
  const { blockClass, snippet } = props;
  return (
    <div className={"single-photo"}>
      <div
        className={`photo-single ${snippet.id} ${blockClass}-${snippet.id}`}
      ></div>
    </div>
  );
};

export default Single;
