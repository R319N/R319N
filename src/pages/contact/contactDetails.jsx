// this component was coded by wilfred reign for portfolio presentation
// website:  www.wilfredreign.netlify.app
// facebook: wilfred reign
// contact : +27 61 202 3165
// whatsapp: +27 61 202 3165

import Gene20Box from "@/components/Gene20Box/Gene20Box";
import { contactDetailsData } from "@/constants";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
} from "@mui/material";
import React from "react";

export default function ContactDetails() {
  return (
    <Gene20Box
      sx={{
        padding: "2vh",
        margin: "5vw",
        fontVariant: "small-caps",

        display: "flex",

        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: { sm: "column" },
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {contactDetailsData.map((item, key) => (
          <MenuItem
            key={item.name}
            component={Box}
            link={item.link}
            color="secondary"
          >
            <IconButton sx={{ color: item.color }}>{item.icon}</IconButton>
            <ListItemText
              align="right"
              primary={item.name}
              secondary={item.details}
              color="secondary"
            />
          </MenuItem>
        ))}
      </List>
    </Gene20Box>
  );
}
