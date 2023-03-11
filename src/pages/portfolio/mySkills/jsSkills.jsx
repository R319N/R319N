import { TitleText, TypingText } from "@/components/CustomTexts";
import { javascript } from "@/constants";
import { fadeIn } from "@/utils/motion";
import { Avatar, Box, CardHeader, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const JSSkills = () => {
  const header = (
    <TypingText
      title="javascript| scripting languages "
      textStyles="text-center"
    />
  );

  return (
    <Paper
      sx={{
        backgroundColor: "rgba(200, 200, 0, 0.5)",
        p: "0.5rem",
        height: "100%",
      }}
    >
      <CardHeader
        subheader={header}
        sx={{
          display: "flex",
          fontVariant: "all-small-caps",
          fontWeight: "lighter",
          m: "0",
          p: "0",
        }}
      />
      <Box
        sx={{
          display: { xs: "flex", md: "block" },
          justifyContent: "space-evenly",
          alignItems: "center",
          alignContent: "center",
          m: "0.5rem",
        }}
      >
        {javascript.map((item, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.3, 1)}
            key={index}
          >
            <Box
              sx={{
                display: { xs: "block", md: "flex" },
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ width: "8vh", height: "8vh" }}>
                <Image src={item.imgUrl} width={30} height={30} alt={item.name}/>
              </Avatar>
              <Typography
                align="center"
                variant="body2"
                sx={{ fontVariant: "all-small-caps", fontSize: "14px" }}
              >
                {item.title}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Paper>
  );
};

export default JSSkills;
