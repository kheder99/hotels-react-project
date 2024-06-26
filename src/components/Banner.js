import React from "react";

export default function Banner(props) {
  return (
    <div className="banner">
      <h1>{props.title}</h1>
      <div className={props.title}></div>
      <p>{props.subtitle}</p>
      {props.children}
    </div>
  );
}
