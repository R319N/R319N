import RotatingCard from "@/components/RotatingCard";
import { WhatsApp } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const WhatsAppButton = ({ phoneNumber }) => {
  return (
    <RotatingCard>
      <Button
        variant="contained"
        href={`https://wa.me/${phoneNumber}?text=Hie%20wilfred%20reign`}
      >
        <WhatsApp />
      </Button>
    </RotatingCard>
  );
};

export default WhatsAppButton;
