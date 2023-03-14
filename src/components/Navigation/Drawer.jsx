import Gene20Drawer from "@/components/Gene20Drawer/Gene20Drawer";
import Link from "@/utils/link";
import {
  Box,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import navItems from "./navData";

const Drawer = (props) => {
  const { window, handleDrawerToggle, mobileOpen } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Hidden smUp implementation="css">
      <Box component="nav">
        <Gene20Drawer
          width="345px"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Box
            onClick={handleDrawerToggle}
            sx={{
              textAlign: "center",
              height: "100%",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "center",
              display: "flex",
              padding: "2vh",
            }}
          >
            <List sx={{ width: "100%" }}>
              {navItems.map((item) => (
                <Box key={item.name}>
                  <Link href={item.url}>
                    <ListItem component={MenuItem} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                          align="left"
                          sx={{ fontVariant: "all-small-caps" }}
                        >
                          <Typography> {item.name}</Typography>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </Link>
                  <Divider orientation="horizontal" flexItem />
                </Box>
              ))}
            </List>
          </Box>
        </Gene20Drawer>
      </Box>
    </Hidden>
  );
};

export default Drawer;
