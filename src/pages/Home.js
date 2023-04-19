import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import ICard from "../components/ICard";
import TextInput from "../components/SearchBar/TextInput";
import styles from "./Home.module.scss";
import TagInput from "../components/SearchBar/TagInput";
import SearchButton from "../components/SearchButton";
import { useState } from "react";
import {
  getAllInternships,
  getCompanyById,
  getInternshipsByTag,
  getInternshipsByTitle,
} from "../firebase/actions/dbActions";
import InternshipDetails from "../components/DetailCard/InternshipDetails";
import { useEffect } from "react";
import { getDateAndYear, timeAgo } from "../utils";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router";

const cards = [
  "Programming",
  "Web Development",
  "Graphics",
  "Content-writing",
  "Content-writing",
  "Content-writing",
];

const Home = () => {
  const [textInput, setTextInput] = useState("");
  const [tagInputs, setTagInputs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [userId, setUserId] = useState(
    auth.currentUser ? auth.currentUser.uid : null
  );

  const navigate = useNavigate();
  const cardClickHandler = (index) => {
    setActiveIndex(index);
    setActiveCard(searchResults[index]);
    getCompanyById(searchResults[index].companyId).then((doc) => {
      if (doc.exists) {
        setActiveCard({ ...searchResults[index], company: doc.data() });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  };

  const searchHandler = () => {
    if (textInput.length === 0) {
      getAllInternships().then((snapshot) => {
        let internships = snapshot.docs.map((doc) => doc.data());
        setSearchResults(internships);
        setActiveCard(internships[0]);
      });
      return;
    }

    getInternshipsByTitle(textInput).then((snapshot) => {
      let results = snapshot.docs.map((doc) => doc.data());
      setSearchResults(results);
    });
    if (tagInputs.length === 0) return;
    getInternshipsByTag(tagInputs).then((snapshot) => {
      let results = snapshot.docs.map((doc) => doc.data());
      setSearchResults((prevResults) => [...prevResults, ...results]);
    });
  };

  useEffect(() => {
    getAllInternships().then((snapshot) => {
      let internships = snapshot.docs.map((doc) => doc.data());
      setSearchResults(internships);
      setActiveCard(internships[0]);
    });
  }, [getAllInternships]);

  if (!activeCard) {
    navigate("/login");
    return null;
  }
  return (
    <section className="h-screen bg-gray-100">
      <Navbar />
      <div className={styles.search}>
        <TextInput
          onChange={(input) => setTextInput(input)}
          input={textInput}
        />
        <TagInput updateTags={(tags) => setTagInputs(tags)} tags={tagInputs} />
        <SearchButton onSearch={searchHandler} />
      </div>
      <section className={styles.flexbox}>
        <div className={styles.main}>
          <div className={styles.list}>
            <Box>
              {searchResults.map((result, index) => (
                <div key={index}>
                  <ICard
                    onClick={cardClickHandler}
                    title={result.title}
                    date={result.timestamp}
                    type={result.type}
                    city={result.city}
                    active={index === activeIndex ? true : false}
                    companyId={result.companyId}
                    internshipId={result.internshipId}
                    index={index}
                    status={result.status}
                  />
                  <br />
                </div>
              ))}
            </Box>
          </div>
          <div className={styles.details}>
            <InternshipDetails
              imageUrl={activeCard?.company?.logo}
              title={activeCard?.title}
              company={activeCard?.company?.companyName}
              description={activeCard?.description}
              location={activeCard?.city}
              status={activeCard?.status}
              internshipId={activeCard?.internshipId}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
