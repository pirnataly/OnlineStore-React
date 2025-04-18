import React from "react";
import "./Overlay.scss";
import { OverlayProps } from "../interfaces/types";
import SearchingPanel from "../header/__SearchWrapper/__SearchingPanel/SearchingPanel";

const Overlay = (props: OverlayProps) => {
  const { onClickHandler, onFocusHandler, viewportWidth } = props;

  return (
    <>
      <SearchingPanel
        onFocusHandler={onFocusHandler}
        changePageDueToValue={props.changePageDueToValue}
        changeCategoryFunc={props.changeCategoryFunc}
        changeInputHandler={props.changeInputHandler}
        onClickHandler={onClickHandler}
        inputValue={props.inputValue}
        setInputValue={props.setInputValue}
        viewportWidth={viewportWidth}
      />
      <div className="overlay" onClick={onClickHandler}></div>
    </>
  );
};

export default Overlay;
