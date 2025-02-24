import React, { SyntheticEvent, useEffect, useState } from "react";
import Overlay from "../../overlay/Overlay";
import Search from "./__Search/Search";
import SearchButton from "../__SearchButton/SearchButton";

const SearchWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleOnResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleOnResize);
    return () => window.removeEventListener("resize", handleOnResize);
  }, []);

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
    if ((e.target as HTMLElement).closest(".searching-panel")) {
      return;
    } else {
      setIsOpen(false);
    }
  }

  const component =
    viewportWidth > 376 ? (
      <Search
        onFocusHandler={handleFocus}
        parent="header"
        create={() => {}}
        value=""
      />
    ) : (
      <SearchButton onClickHandler={handleFocus} />
    );

  return (
    <div className={"search-wrapper header__search"}>
      {component}
      {isOpen && (
        <Overlay onClickHandler={handleClick} onFocusHandler={handleFocus} />
      )}
    </div>
  );
};

export default SearchWrapper;
