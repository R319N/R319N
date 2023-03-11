import { socialMediaRoutes } from "@/constants";
import { Avatar, Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import RotatingCard from "../RotatingCard";

export default function SocialContacts() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        padding: "0",
        fontVariant: "small-caps",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {socialMediaRoutes.map((social, index) => (
          <Box
            xs={2}
            key={social.name}
            sx={{
              transition: "transform 0.2s linear",
              display: "flex",
              // margin: "10px",

              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
          >
            <Avatar component="a" href={social.url}>
              <RotatingCard>{social.icon}</RotatingCard>
            </Avatar>
          </Box>
        ))}
      </Grid>
      <Link />
    </Grid>
  );
}
