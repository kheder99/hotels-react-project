import React from "react";

export default function Title(props) {
  return (
    <div
      className={
        props.title === "General Rating" ? "section-title2" : "section-title"
      }
    >
      <h4>{props.title}</h4>
      <div id={props.title}></div>
    </div>
  );
}
