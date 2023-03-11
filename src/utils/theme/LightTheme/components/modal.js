import borders from "../base/borders";
import boxShadows from "../base/boxShadows";

const { borderRadius } = borders;
const { xxl } = boxShadows;

const modal = {
  styleOverrides: {
    root: {
      "& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop ": {
        backgroundColor: "rgba(255,255,255,0.1)",
      },
    },
    paper: {
      borderRadius: borderRadius.lg,
      boxShadow: xxl,
    },

    paperFullScreen: {
      borderRadius: 0,
    },
  },
};
export default modal;