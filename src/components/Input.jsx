import { useEffect, useState } from "react";
import styles from "./css/header.module.css";

export default function Input({ handleClick, inputValue, handleChange }) {
  return (
    <div>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          onChange={handleChange}
          value={inputValue}
          placeholder="Search for any IP address or domain"
        />
        <button onClick={handleClick} className={styles.button}>
          ▶
        </button>
      </div>
    </div>
  );
}
