import * as React from "react";

import {
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
import { getCompanyById } from "../../firebase/actions/dbActions";
import { useState } from "react";
import { capitalizeString, getDateAndYear } from "../../utils";
import { useEffect } from "react";

export default function ICard(props) {
  const { title, date, type, city, active, companyId, index, onClick } = props;
  const [company, setCompany] = useState();

  useEffect(() => {
    getCompanyById(companyId.trim()).then((doc) => {
      if (doc.exists) {
        setCompany(doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  }, []);

  return (
    <Card
      sx={{
        maxWidth: 450,
        backgroundColor: active ? "blue" : "white",
        transition: "all 0.3s ease-in-out",
      }}
      onClick={() => onClick(index)}
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
            src={company?.logo}
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
        title={capitalizeString(title)}
        subheader={getDateAndYear(new Date(date))}
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
            backgroundColor: active ? "white" : "pink",
            borderRadius: "5px",
          }}
        />
        <Chip
          label={city}
          sx={{
            backgroundColor: "lightblue",
            borderRadius: "5px",
          }}
        />
        <Chip
          label={city}
          sx={{
            backgroundColor: active ? "white" : "lightgrey",
            fontSize: "0.8em",
          }}
        >
          {city}
        </Chip>
      </CardActions>
    </Card>
  );
}
