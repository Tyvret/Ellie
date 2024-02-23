import React from "react";

export function Button(props) {
  const handleClick = (e) => {
    props.Click(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`${props.name} ${
        props.isWrong && props.name === props.isWrongButton ? "wrong" : ""
      }`}
    >
      {props.img}
      {props.image && <img src={props.image} alt="" />}
    </button>
  );
}
