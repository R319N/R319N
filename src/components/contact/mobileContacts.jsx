import Gene20Box from "@/components/Gene20Box/Gene20Box";
import { contactDetailsData } from "@/constants";
import { List, ListItem } from "@mui/material";
import React from "react";
const MobileContacts = () => {
  return (
    <Gene20Box
      sx={{
        display: "flex",
        justifyContent: "right",
      }}
    >
      <List sx={{ display: "flex" }}>
        {contactDetailsData.map((item, key) => (
          <ListItem key={item.name} link={item.link} color="secondary">
            {item.component}
          </ListItem>
        ))}
      </List>
    </Gene20Box>
  );
};

export default MobileContacts;
