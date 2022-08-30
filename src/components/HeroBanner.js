import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/crop.jpg";

const HeroBanner = () => (
  <Grid
    container
    spacing={2}
    sx={{ mt: { lg: "75", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="10px"
  >
    <Grid item xs={6}>
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Erdal Hoca GYM Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Acıması lazım,
        <br />
        Hocam
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Explore Exercises
        </a>
        <a
          href="getplan"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Get Your Free Erdal's Plan
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "150px",
        }}
      >
        Exercise
      </Typography>
    </Grid>
    <Grid item xs={6}>
      <img
        style={{ borderRadius: "10%" }}
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Grid>
  </Grid>

  //   </Grid>
  //   <Grid xs={8}>

  //   </Grid>
  // </Grid>
);

export default HeroBanner;
