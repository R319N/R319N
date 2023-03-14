import { Send } from "@mui/icons-material";
import { Box, Button, InputLabel, TextField } from "@mui/material";
import React, { useRef } from "react";

const ContactForm = (props) => {
  const fullnameInputRef = useRef();
  const imageInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredfullname =
      fullnameInputRef.current.querySelector("input").value;
    const enteredImage = imageInputRef.current.querySelector("input").value;
    const enteredemail = emailInputRef.current.querySelector("input").value;
    const enteredmessage = messageInputRef.current.querySelector("input").value;

    const meetUpData = {
      fullname: enteredfullname,
      image: enteredImage,
      email: enteredemail,
      message: enteredmessage,
    };
    props.onAddMeetUp(meetUpData);
  }

  return (
    <>
      <Box sx={{ margin: "5vw" }}>
        <form onSubmit={submitHandler}>
          <Box sx={{ padding: "1vw" }}>
            <InputLabel htmlFor="fullname" sx={{ mb: "1vh" }}>
              fullname
            </InputLabel>
            <TextField
              ref={fullnameInputRef}
              label="fullname"
              id="fullname"
              type="text"
              required
              fullWidth
            />
          </Box>
          <Box sx={{ padding: "1vw" }}>
            <InputLabel htmlFor="email" sx={{ mb: "1rem" }}>
              email address
            </InputLabel>
            <TextField
              type="text"
              id="email"
              ref={emailInputRef}
              label="email"
              required
              fullWidth
            />
          </Box>
          <Box sx={{ padding: "1vw" }}>
            <InputLabel htmlFor="message" sx={{ mb: "1rem" }}>
              write your message here
            </InputLabel>
            <TextField
              type="text"
              id="message"
              ref={messageInputRef}
              label="message"
              required
              multiline
              rows={4}
              fullWidth
            />
          </Box>
          <Box sx={{ display: "flex ", justifyContent: "right" }}>
            <Button
              variant="contained"
              align="right"
              type="submit"
              sx={{ m: "2vh" }}
              endIcon={<Send />}
            >
              send Message
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default ContactForm;
