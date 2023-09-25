import React from "react";
import Gene20Box from "@/components/Gene20Box/Gene20Box";
import ParticlesBackground from "@/components/particlesBackground";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { gene20BaseTheme } from "@/utils/theme";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import PortfolioPresentation from "@/components/PresentationComponents/portfolioPresentation";

const Presentation = () => {
  const theme = gene20BaseTheme;
  const phone = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Gene20Box sx={{ height: "100vh", position: "relative" }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <Box
          sx={{
            padding: 0,
            backgroundImage: phone
              ? `url('/user1.jpg')`
              : tablet
              ? `url('/codeback.jpg')`
              : `linear-gradient(to bottom left ,#0303d367 ,#00f3f3e7 , #0303e3a7 , #000000)`,
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            fontVariant: "small-caps",
          }}
        >
          <Box
            sx={{
              backgroundImage: `linear-gradient(to bottom left ,
                #000047ee ,#002049ee , #000044 , #000000)`,
              height: "100%",
              backdropFilter: "blur(1px)",
            }}
          >
            <ParticlesBackground />
            <Box sx={{ height: "100%" }}>
              <PortfolioPresentation phone={phone} />
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Gene20Box>
  );
};

export default Presentation;
