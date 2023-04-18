import React from "react";
import styles from "./TextInput.module.scss";

const TextInput = ({ onChange, input }) => {
  const inputChangeHandler = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchTerm}
        type="text"
        placeholder="Search by title..."
        value={input}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default TextInput;
