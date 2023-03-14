import styles from "@/styles";
import { slideIn, staggerContainer } from "@/utils/motion";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Attributes from "./myAttributes";
import MySkills from "./mySkills";
import Projects from "./projects";

const PortFolio = () => {
  return (
    <Container
      id="portfolio"
      sx={{
        m: "12vh 0",
        p: "0vh 2vh",
        overflow: "hidden",
        backgroundColor: (theme) => theme.palette.background.navigation,
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <Typography
          variant="h3"
          color="primary"
          sx={{
            fontVariant: "all-small-caps",
            fontWeight: "bold",
            margin: "1rem",
          }}
          align="right"
        >
          my portfolio
          <hr component={Divider} color="secondary" />
        </Typography>

        <Projects />
        <Box sx={{ m: "2vh 0" }}>
          <MySkills />
        </Box>
        <Box sx={{ m: "2vh 0" }}>
          <Attributes />
        </Box>
      </motion.div>
    </Container>
  );
};

export default PortFolio;
