import React from "react";
import "./ColoredLetters.scss";

const ColoredLetters = (props: { str: string; val: string }) => {
  const loweredCasedVal = props.val.toLowerCase();
  const words = props.str.split(" ");

  const fullOverlap = (word: string) => {
    if (word.toLowerCase().startsWith(loweredCasedVal)) {
      return (
        <span>
          <span className={"colored-letters"}>
            {word.slice(0, props.val.length)}
          </span>
          {word.slice(props.val.length)}
        </span>
      );
    }
    return null;
  };

  const highlightedWords = words.map((word, index) => {
    if (word.toLowerCase().startsWith(loweredCasedVal)) {
      return (
        <span key={index}>
          <span className={"colored-letters"}>
            {word.slice(0, props.val.length)}
          </span>
          {word.slice(props.val.length)}
        </span>
      );
    }
    return <span key={index}>{word}</span>;
  });

  return (
    fullOverlap(props.str) ||
    highlightedWords.reduce((prev, curr) => (
      <>
        {prev} {curr}
      </>
    ))
  );
};

export default ColoredLetters;
