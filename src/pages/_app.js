import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/utils/createEmotionCache";
import Layout from "@/components/Layouts/Layout";
import { Box, Paper, ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import "@fontsource/roboto";
import ThemeToogler from "@/components/themeToogler/ThemeToogler";
import Footer from "@/components/footer";
import { gene20BaseTheme, gene20DarkTheme } from "@/utils/theme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const [darkMode, setDarkMode] = React.useState(false);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <title>wilfred reign</title>
      <ThemeProvider theme={darkMode ? gene20DarkTheme : gene20BaseTheme}>
        <Paper variant="outlined" sx={{ minHeight: "100vh", height: "100%", overflow: "hidden" }}>
          <Layout>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to
            build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
          <Box
            sx={{
              position: "fixed",
              bottom: "1rem",
              right: "1rem",
              zIndex: 99,
            }}
          >
            <ThemeToogler darkMode={darkMode} setDarkMode={setDarkMode} />
          </Box>
          <Footer />
        </Paper>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
