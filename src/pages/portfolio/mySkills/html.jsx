import { TypingText } from "@/components/CustomTexts";
import { html } from "@/constants";
import { fadeIn } from "@/utils/motion";
import { Avatar, Box, CardHeader, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const HtmlSkills = () => {
  const header = <TypingText title="html| xml " textStyles="text-center" />;
  return (
    <Paper
      sx={{
        backgroundColor: "rgba(255, 100, 0, 0.5)",
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
          justifyItems: "center",
          alignItems: "center",
          m: "0.5rem",
        }}
      >
        {html.map((item, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.0, 1)}
            key={index}
          >
            <Box
              sx={{
                display: { xs: "block", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ width: "8vh", height: "8vh", display: "flex-column" }}
              >
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

export default HtmlSkills;
