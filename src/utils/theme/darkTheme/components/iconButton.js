import boxShadows from "../base/boxShadows";
import colors from "../base/colors";

const { transparent } = colors;

const iconButton = {
  styleOverrides: {
    root: {
      boxShadow: boxShadows.lg,

      "&:hover": {
        boxShadow: boxShadows.lg,
        backgroundColor: transparent.main,
      },
    },
  },
};
export default iconButton;
