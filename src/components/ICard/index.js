import * as React from "react";

import {
  Typography,
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
  Chip,
} from "@mui/material";
import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import LaptopImg from "./../../images/laptop.jpg";

export default function ICard(props) {
  const { img, title, date, type, city, active } = props;
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: active ? "blue" : "white",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: red[500],
              outline: "0.2em solid white",
              outlineOffset: "-0.2em",
            }}
            aria-label="company"
            variant="rounded"
            src={img}
          >
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="add to favorites">
            {/* <FavoriteIcon variant="outlined" /> */}
            <FavoriteBorderIcon sx={{ color: active ? "white" : "black" }} />
          </IconButton>
        }
        title={title}
        subheader={date}
        subheaderTypographyProps={{
          color: active ? "rgba(255, 255, 255, 0.8)" : "black",
        }}
        sx={{
          color: active ? "white" : "black",
        }}
      />
      <CardActions
        sx={{
          display: "flex",
          gap: "1em",
        }}
      >
        <Chip
          label={type}
          sx={{
            color: active ? "white" : "red",
            borderRadius: "5px",
          }}
        />
        <Typography
          sx={{
            color: active ? "white" : "blue",
            fontSize: "0.8em",
          }}
        >
          {city}
        </Typography>
      </CardActions>
    </Card>
  );
}
