import { AccountCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

export default function AccountIcon() {
  return (
    <IconButton size="small" edge="end" color="inherit">
      <AccountCircle />
    </IconButton>
  );
}
