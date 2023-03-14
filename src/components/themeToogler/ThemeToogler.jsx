import { DarkMode, LightMode } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

const ThemeToogler = ({ darkMode, setDarkMode }) => {
  return (
    <Box sx={{ position: "relative", bottom: "5vh" }}>
      <IconButton
        onClick={() => setDarkMode(!darkMode)}
        color="secondary"
        sx={{ background: (theme) => theme.palette.primary.main }}
      >
        {darkMode ? <LightMode color="white" /> : <DarkMode color="black" />}
      </IconButton>
    </Box>
  );
};

export default ThemeToogler;
