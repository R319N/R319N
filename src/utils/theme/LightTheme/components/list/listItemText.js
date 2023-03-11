import colors from "../../base/colors";
import typography from "../../base/typography";

const { primary, light } = colors;
const { fontWeightBold, fontWeightLight } = typography;
const listItemText = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      color: primary.main,
      fontWeight: fontWeightBold,
    },
    secondary: {
      color: light.main,
      fontWeight: fontWeightLight,
      textTranform: "lowercase",
    },
  },
};
export default listItemText;
