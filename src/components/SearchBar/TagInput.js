import React from "react";
import styles from "./TagInput.module.scss";

function TagInput({ updateTags, tags }) {
  function handleInput(event) {
    const inputText = event.target.value.trim();
    if (event.key === " " && inputText !== "") {
      updateTags([...tags, inputText]);
      event.target.value = "";
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        onKeyDown={handleInput}
        placeholder="Search by skills..."
        className={styles.tagInput}
      />
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default TagInput;
