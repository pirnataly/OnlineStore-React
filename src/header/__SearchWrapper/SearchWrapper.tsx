import React, { SyntheticEvent, useEffect, useState } from "react";
import Overlay from "../../overlay/Overlay";
import Search from "./__Search/Search";
import SearchButton from "../__SearchButton/SearchButton";
import { SearchWrapperProps } from "../../interfaces/types";

const SearchWrapper = (props: SearchWrapperProps) => {
  const {
    changePageDueToValue,
    changeCategoryFunc,
    inputValue,
    setInputValue,
    viewportWidth,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }
    return () => {
      document.body.classList.remove("popup-open");
    };
  }, [isOpen]);

  function handleFocus() {
    setIsOpen(true);
  }

  function handleClick(e: SyntheticEvent) {
    const target = e.target as HTMLElement;
    if (
      target.closest(".searching-panel") &&
      !(
        target.closest(".category-item") ||
        (target.closest(".history-item") &&
          !target.classList.contains("delete-ico"))
      )
    ) {
      return;
    } else {
      setIsOpen(false);
    }
  }

  const component = window.matchMedia("(max-width: 376px)").matches ? (
    <SearchButton onClickHandler={handleFocus} />
  ) : (
    <Search
      onFocusHandler={handleFocus}
      parent="header"
      create={() => {}}
      inputValue={inputValue}
      setInputValue={setInputValue}
      changeInputFunc={() => setIsOpen(false)}
      changeSearchValueFunc={changePageDueToValue}
    />
  );

  function changeInputHandler() {
    if (inputValue !== "") {
      setIsOpen(false);
    }
  }

  return (
    <div className={"search-wrapper header__search"}>
      {component}
      {isOpen && (
        <Overlay
          changePageDueToValue={changePageDueToValue}
          onClickHandler={handleClick}
          onFocusHandler={handleFocus}
          changeCategoryFunc={changeCategoryFunc}
          changeInputHandler={changeInputHandler}
          inputValue={inputValue}
          setInputValue={setInputValue}
          viewportWidth={viewportWidth}
        />
      )}
    </div>
  );
};

export default SearchWrapper;
