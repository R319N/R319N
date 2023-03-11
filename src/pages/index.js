// import PortfolioPresentation from "./presentation/portfolioPresentation/portfolioPresentation";
import AboutPage from "./about";
import { Box, Container } from "@mui/material";
import ContactPage from "./contact";
import PortFolioPage from "./portfolio";
import Presentation from "./presentation/portfolioPresentation";
import Projects from "./portfolio/projects";

const HomePage = (props) => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Presentation />
      <Box
        sx={{
          display: "block",
          overflow: "hidden",
          height: "100%",
          mt: "10vh",
        }}
      >
        <AboutPage />
        <PortFolioPage />
        <Projects />
        <ContactPage />
      </Box>
    </Box>
  );
};

export default HomePage;
