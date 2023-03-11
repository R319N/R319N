// import { ThemeProvider } from "@mui/material";
// import React, { useState } from "react";
// import gene20LightTheme from "./LightTheme/gene20LightTheme";
// import gene20DarkTheme from "./darkTheme/gene20DarkTheme";

// const Theme = (props) => {
//   const { children, darkMode } = props;
//   const defaultTheme = darkMode ? gene20DarkTheme : gene20LightTheme;
//   return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
// };
// export const withTheme = (Component) => {
//   return (props) => {
//     const [darkMode, setDarkMode] = useState(false);
//     return (
//       <Theme darkMode={darkMode}>
//         <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
//       </Theme>
//     );
//   };
// };

// withTheme.displayName = "ThemeWrapper";
// Theme.displayName = "Theme";


