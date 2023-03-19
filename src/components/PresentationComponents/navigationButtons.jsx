import Gene20Box from "@/components/Gene20Box/Gene20Box";
import { Button, Hidden, Stack, Toolbar } from "@mui/material";
import React from "react";

const PresentationNavigation = (props) => {
  const { phone } = props;
  return (
    <Gene20Box
      sx={{
        display: "flex",
        // justifySelf: "center",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <Stack spacing={2} implementation="css" sx={{zIndex:99}}>
        <a href="#portfolio">
          <Button
            variant="contained"
            type="button"
            sx={{
              width: phone ? "40vw" : "20vw",
            }}
          >
            view Portfolio
          </Button>
        </a>

        <a href="/wilfred-reign.pdf">
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              width: phone ? "40vw" : "20vw",
              color: "white",
            }}
            download
          >
            download cv
          </Button>
        </a>
      </Stack>
    </Gene20Box>
  );
};
//commit this
export default PresentationNavigation;
