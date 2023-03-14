import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "@/styles";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { TitleText, TypingText } from "@/components/CustomTexts";
import { attributes } from "@/constants";
import Image from "next/image";
import { Navigation } from "@mui/icons-material";

const Attributes = () => {
  const header = <TitleText title="attributes" textStyles="text-center" />;
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <CardHeader title={header} />
      <Grid container spacing={2}>
        {attributes.map((attribute, index) => (
          <Grid item xs={12} md={3} key={index}>
            <motion.div
              variants={fadeIn("up", "spring", index * 0.2, 1)}
              className="flex md:flex-row flex-col gap-4"
            >
              <Box>
                <Paper
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    p: "0.5rem",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontVariant: "all-small-caps" }}
                  >
                    {attribute.title}
                  </Typography>
                  <Box
                    sx={{
                      position: "relative",
                      display: { xs: "flex", md: "block" },
                      justifyContent: "space-between ",
                      alignItems: "space-around",
                    }}
                  >
                    <Image
                      component={CardMedia}
                      src={attribute.imgUrl}
                      width={150}
                      height={50}
                      alt={attribute.name}
                      style={{
                        height: "100%",
                        width: "100%",
                        position: "relative",
                      }}
                    />
                    <Typography
                      variant="body2"
                      padding={1}
                      sx={{ fontVariant: "all-small-caps" }}
                    >
                      {attribute.description}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{ fontVariant: "small-caps" }}
                  >
                    {attribute.technologies}
                  </Typography>
                </Paper>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Attributes;
