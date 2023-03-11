import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import {  Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import Attributes from "./myAttributes";
import MySkills from "./mySkills";


const PortFolioPage = () => {
 

  return (
    <Container sx={{ m: "12vh 0", overflow: "hidden" }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Attributes />
          </Grid>
        </Grid>
        <MySkills />
      </motion.div>
    </Container>
  );
};

export default PortFolioPage;
