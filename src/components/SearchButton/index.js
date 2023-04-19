import React from "react";
import styles from "./SearchButton.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

const SearchButton = ({ onSearch }) => {
  return (
    <button className={styles.button} onClick={onSearch}>
      <SearchIcon />
      <span>Search</span>
    </button>
  );
};

export default SearchButton;
