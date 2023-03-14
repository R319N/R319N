// this component was coded by wilfred reign for portfolio presentation
// website:  www.wilfredreign.netlify.app
// facebook: wilfred reign
// contact : +27 61 202 3165
// whatsapp: +27 61 202 3165

import {
  Avatar,
  Box,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import PresentationNavigation from "./navigationButtons";
import Gene20Box from "../../../../Components/Gene20Box/Gene20Box";
import Image from "next/image";

function PresentationHeader(props) {
  const { phone } = props;

  return (
    <Gene20Box
      height="100vh"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Grid
        sx={{
          margin: "0px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        container
      >
        <Grid
          item
          xs={12}
          sm={6}
          align="center"
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <CardContent
            sx={{
              height: "100%",
              display: "block",
            }}
          >
            <Box sx={{ height: "35vh", display: { xs: "none", sm: "block" } }}>
              <Avatar>
                <Image
                  src="/user1.jpg"
                  alt="developer"
                  width={200}
                  height={200}
                  style={{
                    boxShadow: (theme) => theme.boxShadows.lg,
                    height: "35vh",
                    width: "35vh",
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
              </Avatar>
            </Box>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            height: "40vh",
            display: "block",
            justifyContent: "center",
            justifyItems: "center",
            align: "center",
          }}
        >
          <Gene20Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              fontWeight={500}
              sx={{
                backgroundImage: `linear-gradient(44deg , #0000ff ,  #0000ff ,#ff00ff , #ff0000, #e400ff)`,
                color: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bolder",
                width: "100%",
              }}
            >
              wilfred reign
            </Typography>

            <Divider />
          </Gene20Box>

          <Box sx={{ width: "100%" }}>
            <PresentationNavigation phone={phone} />
          </Box>
        </Grid>
      </Grid>
    </Gene20Box>
  );
}

export default PresentationHeader;
