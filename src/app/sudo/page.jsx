"use client";
import { useState } from "react";
import { Squire } from "../components/Squire";

export default function Sudo() {
  const [numbers, setNumber] = useState([3, 5, 1, 4, 2, 6, 8, 9, 7]);

  function incrementhandler() {
    const sorted = numbers.sort(function (a, b) {
      return a - b;
    });
    setNumber([...sorted]);
  }
  function decrementhandler() {
    const sorted2 = numbers.sort(function (a, b) {
      return b - a;
    });
    setNumber([...sorted2]);
  }
  return (
    <div className="sudo">
      <div className="buttons">
        <button onClick={decrementhandler}>decrease</button>
        <button onClick={incrementhandler}>increase</button>
      </div>
      <div>
        <div className="sudoline">
          {numbers.slice(0, 3).map((number) => {
            return <Squire key={number} number={number} />;
          })}
        </div>
        <div className="sudoline">
          {numbers.slice(3, 6).map((number) => {
            return <Squire key={number} number={number} />;
          })}
        </div>
        <div className="sudoline">
          {numbers.slice(6, 9).map((number) => {
            return <Squire key={number} number={number} />;
          })}
        </div>
      </div>
    </div>
  );
}
