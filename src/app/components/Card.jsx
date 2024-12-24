import React from "react";
export const Cart = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
      <img src={props.imgUrl} alt="" />
    </div>
  );
};
