import boxShadows from "../base/boxShadows";
import colors from "../base/colors";

const { primary } = colors;

const iconButton = {
  styleOverrides: {
    root: {
      boxShadow: boxShadows.lg,
      backgroundColor: primary.main,

      "&:hover": {
        boxShadow: boxShadows.xxlg,
        backgroundColor: primary.focus,
      },
    },
  },
};
export default iconButton;
