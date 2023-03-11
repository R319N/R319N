import {
  Box,
  Button,
  Card,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";

const NewMeetUpForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.querySelector("input").value;
    const enteredImage = imageInputRef.current.querySelector("input").value;
    const enteredAddress = addressInputRef.current.querySelector("input").value;
    const enteredDescription =
      descriptionInputRef.current.querySelector("input").value;

    const meetUpData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetUp(meetUpData);
  }

  return (
    <Card
      sx={{
        height: "100%",
        width: { xs: "100vw", sm: "50vw" },
        overflow: "hidden",
      }}
    >
      <Box sx={{ bgcolor: "#020202ff", p: "2vh" }}>
        <Typography
          variant="h4"
          color="primary"
          sx={{ textTransform: "uppercase" }}
        >
          Meet up form
        </Typography>
      </Box>
      <Box sx={{ padding: "2vw" }}>
        <form onSubmit={submitHandler}>
          <>
            <InputLabel htmlFor="title">meet up title</InputLabel>
            <TextField
              ref={titleInputRef}
              label="title"
              id="title"
              type="text"
              variant="standard"
              required
              fullWidth
            />
          </>
          <>
            <InputLabel htmlFor="image">meet up image</InputLabel>
            <TextField
              type="url"
              id="image"
              ref={imageInputRef}
              variant="standard"
              label="image"
              required
              fullWidth
            />
          </>
          <Box sx={{ mb: "2vh" }}>
            <InputLabel htmlFor="address">meet up address</InputLabel>
            <TextField
              type="text"
              id="address"
              ref={addressInputRef}
              variant="standard"
              label="address"
              required
              fullWidth
            />
          </Box>
          <div>
            <InputLabel htmlFor="description">meet up description</InputLabel>
            <TextField
              type="text"
              id="description"
              ref={descriptionInputRef}
              variant="standard"
              label="description"
              required
              // multiline
              rows={4}
              fullWidth
            />
          </div>
          <Button variant="contained" type="submit" sx={{ m: "2vh" }}>
            Add Meet Up
          </Button>
        </form>
      </Box>
    </Card>
  );
};

export default NewMeetUpForm;
