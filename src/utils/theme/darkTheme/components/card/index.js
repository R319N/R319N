import borders from "../../base/borders";
import boxShadows from "../../base/boxShadows";
import colors from "../../base/colors";
import rgba from "../../functions/rgba";

// Material Dashboard 2 React Base Styles


const { black,primary,  background } = colors;
const { borderWidth, borderRadius } = borders;
const { md } = boxShadows;

const card = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundImage: "none",
      backgroundColor: background.card,
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: md,
      overflow: "visible",
      color:primary.main
    },
  },
};

export default card;
