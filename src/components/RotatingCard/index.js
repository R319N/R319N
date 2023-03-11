/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
// import MKBox from "components/MKBox";
import { Avatar, Box } from "@mui/material";

function RotatingCard({ children }) {
  const [rotate, setRotate] = useState(false);

  const rotate0 = () => setRotate(false);
  const rotate360 = () => setRotate(true);

  return (
    <Box sx={{ perspective: "50rem" }} onMouseEnter={rotate360} onMouseLeave={rotate0}>
      <Avatar
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          position: "relative",
          transform: rotate ? "rotateY(360deg)" : "rotateY(0)",
          transformStyle: "preserve-3d",
          transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
        }}
      >
        {children}
      </Avatar>
    </Box>
  );
}

// Typechecking props for the RotatingCard
RotatingCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RotatingCard;
