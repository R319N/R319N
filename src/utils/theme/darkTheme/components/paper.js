import borders from "../base/borders";
import boxShadows from "../base/boxShadows";
import colors from "../base/colors";
import rgba from "../functions/rgba";


const { black, background } = colors;
const { borderWidth, borderRadius } = borders;
const { md } = boxShadows;

const paper = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundImage: "none",
      backgroundColor: background.default,
      backgroundClip: "border-box",
      boxShadow: md,
      padding:"0",
      overflow: "visible",
    },
  },
};

export default paper;
