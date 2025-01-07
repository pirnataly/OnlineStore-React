import React from "react";
import "./Heading.scss";

const Heading = (props: {
  blockClass: string;
  title: string;
  title_id: string;
}) => {
  return (
    <h1 className={`heading ${props.blockClass}__heading`}>
      <span
        className={`heading-text ${props.blockClass}__heading-text ${props.title_id}-heading`}
      >
        {props.title}
      </span>
    </h1>
  );
};
export default Heading;
