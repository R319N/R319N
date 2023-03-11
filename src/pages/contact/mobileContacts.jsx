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
        {/* <ListItem color="secondary">
          <ListItemIcon>
            <EmailButton emailAddress="wilfredr319n@gmail.com" />
          </ListItemIcon>
        </ListItem>
        <ListItem color="secondary">
          <ListItemIcon>
            <PhoneCallButton phoneNumber="01234" />
          </ListItemIcon>
        </ListItem> */}

        {contactDetailsData.map((item, key) => (
          <ListItem key={item.name} link={item.link} color="secondary">
            {item.component}
            {/* <RotatingCard component="a" sx={{ color: item.color }} onClick={item.eventTrigger}>
              {item.icon}
            </RotatingCard> */}
          </ListItem>
        ))}
      </List>
    </Gene20Box>
  );
};

export default MobileContacts;
