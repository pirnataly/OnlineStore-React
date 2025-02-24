import React, { SyntheticEvent } from "react";
import "./Overlay.scss";
import { FunctionTypeVoid } from "../interfaces/types";
import SearchingPanel from "../header/__SearchWrapper/__SearchingPanel/SearchingPanel";

const Overlay = (props: {
  onClickHandler: (e: SyntheticEvent) => void;
  onFocusHandler: FunctionTypeVoid;
}) => {
  const { onClickHandler, onFocusHandler } = props;

  return (
    <>
      <SearchingPanel onFocusHandler={onFocusHandler} />
      <div className="overlay" onClick={onClickHandler}></div>
    </>
  );
};

export default Overlay;
