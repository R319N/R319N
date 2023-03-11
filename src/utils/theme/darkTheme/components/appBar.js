import colors from "../base/colors";
import rgba from "../functions/rgba";

const { primary, secondary } = colors;

const appBar = {
  styleOverrides: {
    root: {
      background: rgba(secondary.main, 0.1),
      color: secondary,
    },
  },
};

export default appBar;
