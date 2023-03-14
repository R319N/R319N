// this component was coded by wilfred reign for portfolio presentation
// website:  www.wilfredreign.netlify.app
// facebook: wilfred reign
// contact : +27 61 202 3165
// whatsapp: +27 61 202 3165

import Gene20Box from "@/components/Gene20Box/Gene20Box";
import { contactDetailsData } from "@/constants";
import { Box, IconButton, List, ListItemText, MenuItem } from "@mui/material";
import React from "react";

export default function ContactDetails() {
  return (
    <Gene20Box className="container-box">
      <List
        className="column-list"
        sx={{
          flexDirection: { sm: "column" },
        }}
      >
        {contactDetailsData.map((item, index) => (
          <MenuItem
            key={index}
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
