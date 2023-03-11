import React from "react";
import { motion } from "framer-motion";
import { fadeIn} from "@/utils/motion";
import {
  Box,
  Button,
  CardHeader,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { TitleText, TypingText } from "@/components/CustomTexts";
import { myProjects } from "@/constants";
import Image from "next/image";
import { Navigation } from "@mui/icons-material";

const Projects = () => {
  const subHeader = (
    <TypingText
      title="| these are projects i have done so far "
      textStyles="text-center"
    />
  );
  const header = <TitleText title="projects" textStyles="text-center" />;
  return (
    <Container>
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
                <Typography variant="h4" sx={{ fontVariant: "all-small-caps" }}>
                  {project.title}
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
                      visit website
                    </Button>
                  </Box>
                </Box>

                <Typography variant="body2" sx={{ fontVariant: "small-caps" }}>
                  {project.technologies}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
