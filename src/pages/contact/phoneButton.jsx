import RotatingCard from "@/components/RotatingCard";
import { Phone } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const PhoneCallButton = ({ phoneNumber }) => {
  return (
    <RotatingCard>
      <Button variant="contained" href={`tel:${phoneNumber}`}>
        <Phone />
      </Button>
    </RotatingCard>
  );
};

export default PhoneCallButton;
