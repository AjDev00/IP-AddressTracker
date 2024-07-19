import Input from "./Input";
import styles from "./css/header.module.css";

export default function Title({ handleClick, inputValue, handleChange }) {
  return (
    <div className={styles.titleContainer}>
      <h3 className={styles.title}>IP Address Tracker</h3>
      <Input
        handleClick={handleClick}
        inputValue={inputValue}
        handleChange={handleChange}
      />
    </div>
  );
}
