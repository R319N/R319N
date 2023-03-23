import AboutPage from "./about";
import { Box } from "@mui/material";
import ContactPage from "./contact";
import Presentation from "./presentation";
import PortFolio from "./portfolio";

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
        <PortFolio />
        <ContactPage />
      </Box>
    </Box>
  );
};

export default HomePage;
