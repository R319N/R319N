import boxShadows from "../base/boxShadows";
import colors from "../base/colors";

const { transparent, primary } = colors;

const drawer = {
  styleOverrides: {
    root: {
      boxShadow: boxShadows.lg,
      backgroundColor: transparent.main,

      "&:hover": {
        boxShadow: boxShadows.lg,
      },
      "& :: -webkit-scrollbar": {
        width: "0.4em",
      },
      "& :: -webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.0)",
        WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.0)",
      },
      "& :: -webkit-scrollbar-thumb": {
        backgroundColor: primary.main,
      },
    },
  },
};
export default drawer;
