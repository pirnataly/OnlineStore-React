import React from "react";
import "./ColoredLetters.scss";
import { ColoredLettersProps } from "../../../../interfaces/types";

const ColoredLetters = ({ str, val }: ColoredLettersProps) => {
  const loweredCasedVal = val.toLowerCase();
  const words = str.split(" ");

  const highlightedWords = words.map((word, index) => {
    if (word.toLowerCase().startsWith(loweredCasedVal)) {
      return (
        <span key={index}>
          <span className={"colored-letters"}>{word.slice(0, val.length)}</span>
          {word.slice(val.length)}
        </span>
      );
    }
    return <span key={index}>{word}</span>;
  });

  return highlightedWords.reduce((prev, curr) => (
    <>
      {prev} {curr}
    </>
  ));
};

export default ColoredLetters;
