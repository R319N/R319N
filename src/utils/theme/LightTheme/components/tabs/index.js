import borders from "../../base/borders";
import boxShadows from "../../base/boxShadows";
import colors from "../../base/colors";
import pxToRem from "../../functions/pxToRem";

// Material Dashboard 2 React base styles

// Material Dashboard 2 React helper functions

const { grey, primary, dark, socialMediaColors } = colors;
const { borderRadius } = borders;
const { tabsBoxShadow } = boxShadows;

const tabs = {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: grey[100],
      borderRadius: borderRadius.xl,
      minHeight: "unset",
      padding: pxToRem(4),
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10,
    },

    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important",
    },

    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%",
      },
    },

    indicator: {
      height: "100%",
      borderRadius: borderRadius.lg,
      backgroundColor: primary.main,
      boxShadow: tabsBoxShadow.indicator,
      transition: "all 500ms ease",
    },
  },
};

export default tabs;
