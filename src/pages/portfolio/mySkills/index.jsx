import { TitleText, TypingText } from "@/components/CustomTexts";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { Box, CardHeader, Grid } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import CssSkills from "./cssSkills";
import HtmlSkills from "./html";
import JSSkills from "./jsSkills";
import StackSkills from "./stacks";

const MySkills = () => {
  const header = <TitleText title="stack" textStyles="text-center" />;
  const subheader = <TypingText title="these are the technologies i use on my projects" textStyles="text-center" />;
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <Box>
        <CardHeader title={header} subheader={subheader} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <HtmlSkills />
          </Grid>
          <Grid item xs={12} md={3}>
            <CssSkills />
          </Grid>
          <Grid item xs={12} md={3}>
            <JSSkills />
          </Grid>
          <Grid item xs={12} md={3}>
            <StackSkills />
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default MySkills;
