import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { footerVariants } from "@/utils/motion";
import SocialContacts from "./socialContact";
import typography from "@/utils/theme/darkTheme/base/typography";
import styles from "@/styles";

const Footer = () => {
  const { size, fontWeightLight, fontWeightBold } = typography;
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Box
        className={`${styles.paddings} py-8 relative`}
        sx={{
          backgroundColor: (theme) => theme.palette.background.navigation,
          backdropFilter: "blur(10px)",
          padding: "2vh",
          display: { sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          fontSize={size.lg}
          fontWeight={fontWeightBold}
        >
          WILFRED REIGN
        </Typography>
        <Typography
          variant="body2"
          fontSize={size.sm}
          fontWeight={fontWeightLight}
        >
          Copyright © 2021 - 2022 Genexx. All rights reserved.
        </Typography>

        <Box
          display="flex"
          justifyContent="left"
          alignItems="left"
          flexWrap="wrap"
          fontSize={size.sm}
          px={1.5}
        >
          <SocialContacts />
        </Box>
      </Box>
    </motion.footer>
  );
};

export default Footer;
