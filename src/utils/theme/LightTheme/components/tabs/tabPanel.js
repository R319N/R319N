import borders from "../../base/borders";
import colors from "../../base/colors";
import typography from "../../base/typography";
import pxToRem from "../../functions/pxToRem";

const { size, fontWeightRegular, fontWeightBold } = typography;
const { borderRadius } = borders;
const { primary, light, secondary, text } = colors;

const tabPanel = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      fontWeight: fontWeightRegular,
      fontVariant: "small-caps",
      lineHeight: "inherit",
      padding: pxToRem(6),
      borderRadius: borderRadius.lg,
      color: `${text.main} !important`,
      opacity: "1 !important",

      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: pxToRem(10),
      },

      "& svg": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },
      "&:focus": {
        color: `${light.main} !important`,
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};

export default tabPanel;
