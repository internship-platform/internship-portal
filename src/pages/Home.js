import React from "react";
import { Box, Container } from "@mui/material";

import Navbar from "../components/Navbar";
import ICard from "../components/ICard";
import IDetail from "../components/IDetail";
// import LaptopImg from "../images/laptop.jpg";

const cards = ["Programming", "Web Development", "Graphics", "Content-writing"];

function Home() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth={false}
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          {cards.map((card, _id) => (
            <ICard title={card} key={_id} />
          ))}
        </Box>
        <IDetail />
      </Container>
    </>
  );
}

export default Home;
