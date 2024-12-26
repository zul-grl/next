"use client";
import { useState } from "react";
import styles from "./page.module.css";
export default function Page() {
  const [screen, setScreen] = useState("");
  function buttonClicked(too) {
    setScreen(screen + too);
  }
  function clearHandler() {
    setScreen("");
  }
  function operationHandler() {
    if (screen.includes("+")) {
      const nums = screen.split("+");
      const result = Number(nums[0]) + Number(nums[1]);
      setScreen(result);
    }
    if (screen.includes("-")) {
      const nums = screen.split("-");
      const result = Number(nums[0]) - Number(nums[1]);
      setScreen(result);
    }
    if (screen.includes("*")) {
      const nums = screen.split("*");
      const result = Number(nums[0]) * Number(nums[1]);
      setScreen(result);
    }
    if (screen.includes("/")) {
      const nums = screen.split("/");
      const result = Number(nums[0]) / Number(nums[1]);
      setScreen(result);
    }
  }
  return (
    <div className={styles.pageContainer}>
      <div className={styles.calculator}>
        <p>{screen}</p>
        <div className={styles.buttonContainer}>
          <button onClick={() => buttonClicked(1)}>1</button>
          <button onClick={() => buttonClicked(2)}>2</button>
          <button onClick={() => buttonClicked(3)}>3</button>{" "}
          <button onClick={() => buttonClicked("+")}>+</button>
          <button onClick={() => buttonClicked(4)}>4</button>
          <button onClick={() => buttonClicked(5)}>5</button>
          <button onClick={() => buttonClicked(6)}>6</button>
          <button onClick={() => buttonClicked("-")}>-</button>
          <button onClick={() => buttonClicked(7)}>7</button>
          <button onClick={() => buttonClicked(8)}>8</button>
          <button onClick={() => buttonClicked(9)}>9</button>{" "}
          <button onClick={() => buttonClicked("*")}>*</button>
          <button onClick={() => buttonClicked(0)}>0</button>
          <button onClick={() => buttonClicked("/")}>/</button>
          <button onClick={operationHandler}>=</button>
          <button onClick={clearHandler}>C</button>
        </div>
      </div>
    </div>
  );
}
