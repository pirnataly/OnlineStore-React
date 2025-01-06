import React from "react";
import { ProductItemWithType } from "../../../../../../../interfaces/types";
import "./Quadro.scss";

const Quadro = (props: { snippet: ProductItemWithType }) => {
  const { snippet } = props;
  return (
    <div className={"quadro-photos"}>
      <div
        className={`photo-quadro_first ${snippet.id} ${snippet.id}_first`}
      ></div>
      <div
        className={`photo-quadro_second ${snippet.id} ${snippet.id}_second`}
      ></div>
      <div
        className={`photo-quadro_third ${snippet.id} ${snippet.id}_third`}
      ></div>
      <div
        className={`photo-double_fourth ${snippet.id} ${snippet.id}_fourth`}
      ></div>
    </div>
  );
};

export default Quadro;
