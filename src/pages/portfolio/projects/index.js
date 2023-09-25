import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

// *** MUI5 imports ***
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { TitleText, TypingText } from "@/components/CustomTexts";
import { myProjects } from "@/constants";
import Image from "next/image";
import { Navigation } from "@mui/icons-material";
import styles from "@/styles";

const Projects = () => {
  const subHeader = (
    <TypingText
      title="| this is a list of some of the projects i have done so far "
      textStyles="text-center"
    />
  );
  const header = <TitleText title="projects" textStyles="text-center" />;
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <CardHeader title={header} subheader={subHeader} />
      <Grid container spacing={2}>
        {myProjects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <motion.div
              variants={fadeIn("up", "spring", index * 0.5, 1)}
              className="flex md:flex-row flex-col gap-4"
            >
              <Paper
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  height: "100%",
                  p: "0.5rem",
                }}
              >
                <Typography
                  variant="h4"
                  color="secondary"
                  sx={{ fontVariant: "all-small-caps" }}
                >
                  {project.title}
                  <hr />
                </Typography>
                <Box sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src={project.imgUrl}
                      height={200}
                      width={500}
                      alt={project.name}
                      style={{
                        height: "30vh",
                        width: "100%",
                        opacity: "0.5",
                        "&:active, &:active:focus, &:hover": {
                          opacity: "1",
                        },
                      }}
                    />

                    <Button
                      sx={{ position: "absolute" }}
                      variant="contained"
                      endIcon={<Navigation />}
                    >
                      <a href={project.pageUrl}>visit website</a>
                    </Button>
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontVariant: "all-small-caps" }}
                >
                  {project.technologies}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Projects;
