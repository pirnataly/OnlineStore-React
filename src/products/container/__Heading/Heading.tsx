import React from "react";
import "./Heading.scss";

const Heading = (props: {
  containerType: string;
  title: string;
  title_id: string;
}) => {
  return (
    <h1 className={`heading ${props.containerType}__container__heading`}>
      <span
        className={`heading-text ${props.containerType}__container__heading-text ${props.title_id}-heading`}
      >
        {props.title}
      </span>
    </h1>
  );
};
export default Heading;
