import React from "react";
import Box from "@mui/material/Box";

import Navbar from "../components/Navbar";
import ICard from "../components/ICard";

const cards = ["Programming", "Web Development", "Graphics", "Content-writing"];

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginLeft: 2,
          marginTop: 2,
        }}
      >
        {cards.map((card) => (
          <>
            <ICard title={card} />
            <br />
          </>
        ))}
      </Box>
    </>
  );
};

export default Home;
