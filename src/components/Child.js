import React from "react";
import "./Child.css";
import rain from "../images/rain-leo.png";

export default function Child() {
  return (
    <div>
      <h2>Rainbow Lion</h2>
      <img src={rain} alt="Rainbow Lion" />
    </div>
  );
}
