import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import ICard from "../components/ICard";
import TextInput from "../components/SearchBar/TextInput";
import styles from "./Home.module.scss";
import TagInput from "../components/SearchBar/TagInput";
import Button from "../components/Button";
import { useState } from "react";
import {
  getInternshipsByTag,
  getInternshipsByTitle,
} from "../firebase/actions/dbActions";

const cards = ["Programming", "Web Development", "Graphics", "Content-writing"];

const Home = () => {
  const [textInput, setTextInput] = useState("");
  const [tagInputs, setTagInputs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = () => {
    getInternshipsByTitle(textInput).then((snapshot) => {
      let results = snapshot.docs.map((doc) => doc.data());
      setSearchResults(results);
      console.log(results);
    });
    if (tagInputs.length === 0) return;
    getInternshipsByTag(tagInputs).then((snapshot) => {
      let results = snapshot.docs.map((doc) => doc.data());
      setSearchResults((prevResults) => [...prevResults, ...results]);
      console.log(results);
    });
  };

  return (
    <>
      <Navbar />
      <div className={styles.search}>
        <TextInput
          onChange={(input) => setTextInput(input)}
          input={textInput}
        />
        <TagInput updateTags={(tags) => setTagInputs(tags)} tags={tagInputs} />
        <Button onSearch={searchHandler} />
      </div>
      <Box
        sx={{
          marginLeft: 2,
          marginTop: 2,
        }}
      >
        {cards.map((card, index) => (
          <div key={index}>
            <ICard title={card} />
            <br />
          </div>
        ))}
      </Box>
    </>
  );
};

export default Home;
