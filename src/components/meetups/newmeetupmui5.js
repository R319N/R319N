import {
    Button,
    Card,
    FormControl,
    Input,
    InputBase,
    InputLabel,
    TextField,
  } from "@mui/material";
  import React, { useEffect, useRef, useState } from "react";
  
  const NewMeetUpForm = (props) => {
    // const titleInputRef = useRef();
    // const [titleFieldValue, setTitleFieldValue] = useState("");
    // const [imageFieldValue, setimageFieldValue] = useState("");
    // const [addressFieldValue, setAddressFieldValue] = useState("");
    // const [descriptionFieldValue, setDescriptionFieldValue] = useState("");
  
    // const titleInputRef = useRef();
    // const imageInputRef = useRef();
    // const addressInputRef = useRef();
    // const descriptionInputRef = useRef();
  
    // useEffect(() => {
    //   console.log(titleInputRef.current.value);
    // }, [titleInputRef.current]);
    // useEffect(() => {
    //   console.log(addressInputRef.current.value);
    // }, [addressInputRef.current]);
  
    // function handleChange(event) {
    //   setTimeout(
    //     () =>
    //       console.log(
    //          titleInputRef.current.value
    //       ),
    //     100
    //   );
    //   console.log(titleInputRef.current.querySelector("input").value);
    // }
  
    // function submitHandler(event) {
    //   event.preventDefault();
  
    //   const enteredTitle = titleInputRef.current.querySelector("input").value;
    //   const enteredImage = imageInputRef.current.value;
    //   const enteredAddress = addressInputRef.current.value;
    //   const enteredDescription = descriptionInputRef.querySelector("input").value;
  
    //   const meetUpData = {
    //     title: enteredTitle,
    //     image: enteredImage,
    //     address: enteredAddress,
    //     description: enteredDescription,
    //   };
    //   props.onAddMeetUp(meetUpData);
    //   setTitleFieldValue(event.target.value);
    //   console.log(event.target.value);
    // }
  
    return (
      <Card sx={{ height: "70vh", width: "50vw", padding: "2vw" }}>
        <form onSubmit={submitHandler}>
          <>
            <InputLabel htmlFor="title">meet up title</InputLabel>
            <TextField
              ref={titleInputRef}
              label="Textfield Label"
              defaultValue={titleFieldValue}
              id="title"
              type="text"
              required
              fullWidth
            />
          </>
          <>
            <InputLabel htmlFor="image">meet up image</InputLabel>
            <input type="url" id="image" ref={imageInputRef} required />
          </>
          <div>
            <InputLabel htmlFor="address">meet up address</InputLabel>
            <input type="text" id="address" ref={addressInputRef} required />
          </div>
          <div>
            <InputLabel htmlFor="description">meet up description</InputLabel>
            <TextField
              type="text"
              id="description"
              ref={descriptionInputRef}
              defaultValue={titleFieldValue}
              onChange={handleChange}
              required
              multiline="true"
              rows={4}
            />
          </div>
          <div></div>
          <Button variant="contained" type="submit">
            Add Meet Up
          </Button>
        </form>
      </Card>
    );
  };
  
  export default NewMeetUpForm;
  