import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

// Material Dashboard 2 React Helper Functions
const { light, primary } = colors;
const { fontWeightLighter, fontWeightBold, fontSizeXXS } = typography;

const cardHeader = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      padding: `${pxToRem(8)} ${pxToRem(24)} ${pxToRem(24)}`,
      fontVariant:"small-caps"
    },
    title: {
      color: light.main,
      fontWeight: fontWeightBold,
    },
    subheader: {
      color: primary.main,
      fontWeight: fontWeightLighter,
      fontSize: "14px",
    },
  },
};

export default cardHeader;
