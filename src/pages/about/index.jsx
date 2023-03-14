import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { Container } from "@mui/material";
import styles from "../../styles";
import Creator from "../../components/creator";

const AboutPage = () => {
  return (
    <Container
      sx={{
        m: "12vh 0",
        overflow: "hidden",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <Creator />
      </motion.div>
    </Container>
  );
};

export default AboutPage;
