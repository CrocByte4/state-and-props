import React from "react";
import Child from "./Child";

export default function Parent() {
  const characterName = "Leo";
  const surName = "Lion";

  return (
    <div>
      <Child name="Leo" surname="Lion" />
    </div>
  );
}
