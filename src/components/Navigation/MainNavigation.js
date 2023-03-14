import React from "react";
import { Close, Menu } from "@mui/icons-material";

import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Drawer from "./Drawer";
import NavTabs from "./NavTabs";

const MainNavigation = (props) => {
  const { mobileOpen, handleDrawerToggle } = props;
  // const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Box
      position="fixed"
      sx={{ p: { xs: "0.5rem", sm: "1rem" }, width: "100%", zIndex: 99 }}
    >
      <AppBar
        position="static"
        sx={{
          borderRadius: (theme) => theme.shape.borderRadius,
          overflow: "hidden",
          backdropFilter: "blur(10px)",
          width: "100%",
          display: "flex",
          backgroundColor: (theme) => theme.palette.background.navigation,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "space-between",
            alignItems: "space-between",
            // p: "1rem",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Hidden mdUp implementation="css">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                edge="start"
                sx={{ borderRadius: "10px" }}
              >
                {!mobileOpen ? <Menu /> : <Close />}
              </IconButton>
            </Hidden>
            <Box sx={{ display: "flex", ml: "5vw" }}>
              <Typography
                variant="body1"
                sx={{
                  textTransform: "uppercase",
                  display: "flex",
                  justifySelf: "center",
                  color:(theme)=> theme.palette.primary.main ,
                }}
              >
                wilfred
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textTransform: "uppercase",
                  display: "flex",
                  justifySelf: "center",
                  color: "orange",
                }}
              >
                reign
              </Typography>
            </Box>
          </Box>
          <Hidden mdUp implementation="css">
            <a href="#contact">
              <Button variant="contained" color="primary" type="button">
                contact
              </Button>
            </a>
          </Hidden>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NavTabs />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
    </Box>
  );
};

export default MainNavigation;
