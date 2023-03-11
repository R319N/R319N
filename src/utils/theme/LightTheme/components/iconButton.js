import boxShadows from "../base/boxShadows";
import colors from "../base/colors";

const { primary, background } = colors;

const iconButton = {
  styleOverrides: {
    root: {
      boxShadow: boxShadows.lg,

      "&:hover": {
        boxShadow: boxShadows.xxlg,
        backgroundColor: background.paper,
      },
    },
  },
};
export default iconButton;
