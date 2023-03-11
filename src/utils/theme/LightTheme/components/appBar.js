import colors from "../base/colors";
import rgba from "../functions/rgba";

const { primary, secondary } = colors;
const appBar = {
  defaultProps: {
    background: "#fff",
  },

  styleOverrides: {
    root: {
      background: rgba(secondary.main, 0.3),
      //
      // boxShadow: "none",
    },
  },
};

export default appBar;
