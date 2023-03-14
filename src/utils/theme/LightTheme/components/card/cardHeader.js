import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { primary , secondary} = colors;
const { fontWeightLighter, fontWeightBold, fontSizeXXS } = typography;

const cardHeader = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      padding: `${pxToRem(8)} ${pxToRem(24)} ${pxToRem(24)}`,
      fontVariant: "all-small-caps",
    },
    title: {
      color: primary.focus,
      fontWeight: fontWeightBold,
    },
    subheader: {
      color: secondary.focus,
      fontWeight: fontWeightLighter,
      fontSize: "16px",
    },
  },
};

export default cardHeader;
