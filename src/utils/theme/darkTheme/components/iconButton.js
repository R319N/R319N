import boxShadows from "../base/boxShadows";
import colors from "../base/colors";

const { primary, white } = colors;

const iconButton = {
  styleOverrides: {
    root: {
      boxShadow: boxShadows.lg,
      backgroundColor: primary.main,
      color:white.main,

      "&:hover": {
        boxShadow: boxShadows.lg,
        backgroundColor: primary.light,
      },
    },
  },
};
export default iconButton;
