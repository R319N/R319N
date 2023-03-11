import Link from "@/utils/link";
import { AppBar, Container, Tab, Tabs } from "@mui/material";
import React, { forwardRef, useState } from "react";

const LinkTab = forwardRef(({ href, ...rest }, ref) => (
  <Link href={href} color="inherit" sx={{ textDecoration: "none" }}>
    <Tab {...rest} ref={ref} component="li" />
  </Link>
));

const NavTabs = () => {
  const [pageTab, setPageTab] = useState(0);
  return (
    <AppBar position="sticky">
      <Container>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          textColor="inherit"
          indicatorColor="secondary"
          value={pageTab}
          onChange={(e, newValue) => setPageTab(newValue)}
          sx={{ background: "inherit" }}
        >
          <LinkTab label="home" href="/" />
          <LinkTab label="portfolio" href="/portfolio" />
          <LinkTab label="contact" href="/contact" />
          <LinkTab label="about" href="/about" />
        </Tabs>
      </Container>
    </AppBar>
  );
};

NavTabs.displayName = "NavTabs"
LinkTab.displayName = "LinkTab"

export default NavTabs;
