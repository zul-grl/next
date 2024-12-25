"use client";
import { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function calculator() {
  const [number, setnumber] = useState();
  return (
    <div>
      <p>Number:{number}</p>
      <div style={{ display: "flex" }}>
        {numbers.map((number) => {
          return (
            <div>
              <button onClick={() => setnumber(number)}>{number}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
