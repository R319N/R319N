import { motion } from "framer-motion";

import { TitleText, TypingText } from "@/components/CustomTexts";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import {
  fadeIn,
  planetVariants,
  slideIn,
  staggerContainer,
} from "@/utils/motion";
import styles from "@/styles";

const Creator = () => {
  const subHeader = (
    <TypingText title="| FullStack web developer " textStyles="text-center" />
  );
  const header = <TitleText title="Wilfred Reign" textStyles="text-center" />;

  const credentials = (
    <motion.div
      variants={fadeIn("right", "tween", 0.2, 1)}
      className="flex-[0.75] flex justify-center flex-col"
    >
      <CardHeader
        title={header}
        subheader={subHeader}
        sx={{ display: "flex", alignItems: "center" }}
      />
    </motion.div>
  );
  const aboutMe = (
    <Box
      sx={{
        border: "1px solid grey",
        m: "2vh",
        p: "2vh",
        borderRadius: "10px",
      }}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col
  gradient-05 sm:p-8 p-4 rounded-[32px] 
  border-[1px] border-[#6a6a6a] relative "
      >
        <CardContent className={`${styles.paddings} relative z-10`}>
          <Box sx={{ mb: "2vh" }}>
            <CardHeader title="ABOUT WILFRED REIGN" />
            <hr sx={{ color: "white" }} />
          </Box>

          <Typography
            variant="body2"
            className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white"
          >
            “My Name Is Wilfred Reign, I Am A Self Taught Front-End Web
            Developer And Junior Full-Stake Web Developer. I Started Out Web
            Development In Late 2019, Learning Basics Like Css, Html,
            Javascript. With All Thanks To Web Dev Learning Apps Like
            Grasshopper, Sololearn, Mimo Code And A Class Of Youtube Channels
            Coming Up With Dedicated Teachers, Even With Limited Programming I
            Managed To Learn Front-End, Working With Javascript Frameworks
            Particularly React Js. Below Is A List Of All The Stack I Have Been
            Using For All These 3 Years.”
          </Typography>
        </CardContent>
      </motion.div>
    </Box>
  );
  return (
    <Paper elevation={10}>
      <Card>
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "column-reverse" },
              justifyContent:{ xs:"space-between", md:"center"},
                alignItems: "center",
                alignContent:"center"
              }}
            >
              {credentials}
              <motion.div
                variants={planetVariants("right")}
                // className={"flex-1 ${styles.flexCenter}"}
              >
                <CardMedia>
                  <Image
                    alt="creator"
                    src="/user1.jpg"
                    width={100}
                    height={100}
                    style={{
                      borderRadius: "50px",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </CardMedia>
              </motion.div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {aboutMe}
          </Grid>
        </Grid>
      </Card>
    </Paper>
  );
};
{
  /* 

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
      >
       
}
{
  /* 
            <img
              src="/planet-09.png"
              alt="planet- 09"
              className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
            />
            <motion.div
              variants={zoomIn(0.4, 1)}
              className="lg:block hidden absolute -left-[10%] top-[3%]"
            >
              <img
                src="/stamp.png"
                alt="stamp"
                className="w-[155px] h-[155px] oject-contain "
              />
            </motion.div> */
}
{
  /* </motion.div> */
}
{
  /* </motion.div> */
}

export default Creator;
