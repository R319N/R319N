import { Box } from "@mui/material";
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
