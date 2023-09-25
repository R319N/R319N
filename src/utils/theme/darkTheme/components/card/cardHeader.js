import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

// Material Dashboard 2 React Helper Functions
const { secondary, primary ,white} = colors;
const { fontWeightLighter, fontWeightBold } = typography;

const cardHeader = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      padding: `${pxToRem(8)} ${pxToRem(24)} ${pxToRem(24)}`,
      fontVariant:"all-small-caps"
    },
    title: {
      color: white.main,
      fontWeight: fontWeightBold,
    },
    subheader: {
      color: white.main,
      fontWeight: fontWeightLighter,
      fontSize: "16px",
    },
  },
};

export default cardHeader;
