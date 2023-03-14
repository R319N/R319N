import RotatingCard from "@/components/RotatingCard";
import { Mail } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const EmailButton = ({ emailAddress }) => {
  return (
    <RotatingCard>
      <Button variant="contained" href={`mailto:${emailAddress}`}>
        <Mail />
      </Button>
    </RotatingCard>
  );
};

export default EmailButton;
