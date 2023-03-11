import Presentation from "@/pages/presentation/portfolioPresentation";
import { Box, Container, CssBaseline } from "@mui/material";
import React from "react";
import MainNavigation from "../Navigation/MainNavigation";

const Layout = (props) => {
  const { darkMode, setDarkMode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box>
      <MainNavigation
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main>{props.children}</main>
    </Box>
  );
};

export default Layout;
