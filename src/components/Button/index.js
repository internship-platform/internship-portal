import React from "react";
import styles from "./Button.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

const Button = ({ onSearch }) => {
  return (
    <button className={styles.button} onClick={onSearch}>
      <SearchIcon />
      <span>Search</span>
    </button>
  );
};

export default Button;
