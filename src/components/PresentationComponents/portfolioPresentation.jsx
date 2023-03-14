// this component was coded by wilfred reign for portfolio presentation
// website:  www.wilfredreign.netlify.app
// facebook: wilfred reign
// contact : +27 61 202 3165
// whatsapp: +27 61 202 3165

import { TypingText } from "@/components/CustomTexts";
import { fadeIn, slideIn } from "@/utils/motion";
import {
  Avatar,
  Box,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import PresentationNavigation from "./navigationButtons";

const PortfolioPresentation = (props) => {
  const { phone } = props;
  const subHeader = (
    <TypingText
      title="| this is my portfolio website powered by next.JS and mui5"
      textStyles="text-center"
    />
  );

  return (
    <Box
      height="100vh"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid
        sx={{
          margin: "0px",
          height: phone ? "100vh" : "100vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        container
      >
        <Grid
          item
          xs={12}
          sm={6}
          align="center"
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <CardContent sx={{ height: "100%", display: "block" }}>
            <Box sx={{ height: "35vh", display: { xs: "none", sm: "block" } }}>
              <Avatar
                sx={{
                  boxShadow: (theme) => theme.boxShadows.lg,
                  height: "40vh",
                  width: "40vh",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/user1.jpg"
                  alt="developer"
                  width={400}
                  height={400}
                  style={{ width: "100%", height: "100%" }}
                />
              </Avatar>
            </Box>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            height: "40vh",
            display: "block",
            justifyContent: "center",
            justifyItems: "center",
            align: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              align: "center",
              height: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              variants={fadeIn("center", "tween", 0.2, 1)}
              className="flex-[0.75] flex justify-center flex-col"
            >
              <Image
                src="/WRLogo.png"
                alt="developer"
                width={400}
                height={400}
              />
            </motion.div>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="flex-[0.75] flex justify-center flex-col"
            >
              <Typography
                variant="body1"
                component="h6"
                fontWeight={500}
                align="center"
                sx={{
                  backgroundImage: `linear-gradient(44deg , #00ffff ,  #0042ff ,#ff00ff , #ff0000, #e400ff)`,
                  color: "transparent",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bolder",
                  width: "100%",
                }}
              >
                {subHeader}
              </Typography>
              <Divider />
            </motion.div>
          </Box>
          <Box sx={{ width: "100%" }}>
            <PresentationNavigation
              phone={props.phone}
              tablet={props.tablet}
              laptop={props.laptop}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PortfolioPresentation;
