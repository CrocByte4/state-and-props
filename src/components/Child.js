import { useState } from "react";
import "./Child.css";
import rain from "../images/rain-leo.png";

export default function Child({ name, surname }) {
  const [petsOnTheHead, setPetsOnTheHead] = useState(0);

  function handlePet() {
    setPetsOnTheHead(petsOnTheHead + 1);
  }

  return (
    <div>
      <h2>
        This character`s name is {name} {surname}
      </h2>
      <img src={rain} alt="Leo the Lion" onClick={handlePet} />
      <p>Number of pets on their head 👋: {petsOnTheHead}</p>
    </div>
  );
}
