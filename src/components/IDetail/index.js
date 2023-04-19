import * as React from "react";

import { Box, Typography, Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

import LaptopImg from "../../images/laptop.jpg";

function IDetail() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "1em",
          padding: 0,
          width: "50%",
          //   position: "relative",
        }}
      >
        <div>
          <img
            src={LaptopImg}
            alt="img-alt"
            style={{
              borderTopLeftRadius: "1em",
              borderTopRightRadius: "1em",
              height: "20em",
              width: "100%",
            }}
          />
        </div>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingLeft: "3em !important",
            backgroundColor: "white !important",
            marginTop: "-5%",
            zIndex: 4,
          }}
        >
          <Avatar
            aria-label="company"
            variant="rounded"
            src={LaptopImg}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "100px",
              border: "0.3em solid white",
              borderRadius: "1em",
              zIndex: 3,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              // noWrap
              component="div"
              sx={{
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                color: "black",
                textDecoration: "none",
                zIndex: 3,
              }}
            >
              UI / UX Designer
            </Typography>
            <Box>
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton aria-label="share internnship">
                <ShareIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "1em",
              }}
            >
              <Typography
                color={"blue"}
                sx={{
                  fontWeight: 600,
                }}
              >
                Patreon
              </Typography>
              <Typography
                sx={{
                  opacity: 0.5,
                }}
              >
                London Town, MD
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "1em",
              }}
            >
              <Typography
                sx={{
                  opacity: 0.5,
                }}
              >
                posted 8 Days ago
              </Typography>
              <Typography>|</Typography>
              <Typography>98 Applicants</Typography>
            </Box>
          </Box>
          <Container
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                margin: "2em 0em",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                padding: "1em 2em",
              }}
            >
              <Typography
                sx={{
                  opacity: 0.5,
                }}
              >
                Experience
              </Typography>
              <Typography>Minimum 1 year</Typography>
            </Box>
            <Box
              sx={{
                margin: "2em 0em",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                padding: "1em 2em",
              }}
            >
              <Typography
                sx={{
                  opacity: 0.5,
                }}
              >
                Work Level
              </Typography>
              <Typography>Senior Level</Typography>
            </Box>
            <Box
              sx={{
                margin: "2em 0em",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                padding: "1em 2em",
              }}
            >
              <Typography
                sx={{
                  opacity: 0.5,
                }}
              >
                Employee Type
              </Typography>
              <Typography>Full-time</Typography>
            </Box>
            <Box
              sx={{
                margin: "2em 0em",
                display: "flex",
                flexDirection: "column",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                padding: "1em 2em",
              }}
            >
              <Typography
                sx={{
                  opacity: 0.5,
                }}
              >
                Salary
              </Typography>
              <Typography>$215.0 / Month</Typography>
            </Box>
          </Container>
          {/* Overview */}
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1em",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5em",
                fontWeight: "700",
              }}
            >
              Overview
            </Typography>
            <Typography
              sx={{
                opacity: 0.8,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Container>
          {/* Job Description */}
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "2em",
              gap: "1em",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5em",
                fontWeight: "700",
              }}
            >
              Job Description
            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5em",
                opacity: 0.8,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "1em",
                }}
              >
                <PanoramaFishEyeIcon color="primary" />
                <Typography>
                  3+ years of experience in designing, testing, and implementing
                  React JS applications
                </Typography>
              </Box>
              {/*  */}
              <Box
                sx={{
                  display: "flex",
                  gap: "1em",
                }}
              >
                <PanoramaFishEyeIcon color="primary" />
                <Typography>
                  3+ years of experience in designing, testing, and implementing
                  React JS applications
                </Typography>
              </Box>
              {/*  */}
              <Box
                sx={{
                  display: "flex",
                  gap: "1em",
                }}
              >
                <PanoramaFishEyeIcon color="primary" />
                <Typography>
                  3+ years of experience in designing, testing, and implementing
                  React JS applications
                </Typography>
              </Box>
              {/*  */}
              <Box
                sx={{
                  display: "flex",
                  gap: "1em",
                }}
              >
                <PanoramaFishEyeIcon color="primary" />
                <Typography>
                  3+ years of experience in designing, testing, and implementing
                  React JS applications
                </Typography>
              </Box>
              {/*  */}
            </Typography>
          </Container>
        </Container>
      </Box>
    </>
  );
}

export default IDetail;
