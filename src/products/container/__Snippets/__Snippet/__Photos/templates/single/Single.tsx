import React from "react";
import "./Single.scss";
import { ProductItemWithType } from "../../../../../../../interfaces/types";

const Single = (props: { snippet: ProductItemWithType }) => {
  const { snippet } = props;
  return (
    <div className={"single-photo"}>
      <div className={`photo-single ${snippet.id}`}></div>
    </div>
  );
};

export default Single;
