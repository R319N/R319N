import Gene20Box from "@/components/Gene20Box/Gene20Box";
import Link from "@/utils/link";
import { Button, Stack } from "@mui/material";
import React from "react";

export default function PresentationNavigation(props) {
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
      <Stack spacing={2}>
        <Link href="/portfolio">
          <Button
            variant="contained"
            color="primary"
            sx={{
              width: phone ? "40vw" : "20vw",
            }}
          >
            view Portfolio
          </Button>
        </Link>

        <Link href="/about">
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              width: phone ? "40vw" : "20vw",
              color: "white",
            }}
          >
            download cv
          </Button>
        </Link>
      </Stack>
    </Gene20Box>
  );
}
