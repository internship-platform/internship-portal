import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import LaptopImg from "./../../images/laptop.jpg";

export default function ICard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="company"
            variant="rounded"
            src={LaptopImg}
          >
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="add to favorites">
            {/* <FavoriteIcon variant="outlined" /> */}
            <FavoriteBorderIcon />
          </IconButton>
        }
        title={props.title}
        subheader="January 14, 2023"
      />
      <CardActions>
        <Chip
          label="Full Time"
          sx={{
            color: "red",
            borderRadius: "5px",
          }}
        />
        <Chip
          label="Senior Level"
          sx={{
            color: "blue",
            borderRadius: "5px",
          }}
        />
      </CardActions>
    </Card>
  );
}
