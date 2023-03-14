import colors from "../../base/colors";
import typography from "../../base/typography";
import boxShadow from "../../functions/boxShadow";
import pxToRem from "../../functions/pxToRem";

const { secondary, primary, light } = colors;
const { size } = typography;

const buttonShadow = `${boxShadow(
  [0, 3],
  [3, 0],
  secondary.main,
  0.15
)},${boxShadow([0, 3], [1, -2], secondary.main, 0.25)} , ${boxShadow(
  [0, 1],
  [5, 0],
  secondary.main,
  0.25
)}`;
const contained = {
  base: {
    backgroundColor: primary.main,
    minHeight: pxToRem(40),
    color: light.main,
    padding: `${pxToRem(10)} ${pxToRem(12)}`,
    boxShadow: buttonShadow,

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      backgroundColor: primary.focus,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: primary.main,

    "&:hover": {
      backgroundColor: primary.focus,
    },

    "&:focus:not(:hover)": {
      backgroundColor: primary.focus,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    "&:hover": {
      backgroundColor: secondary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
    },
  },
};

export default contained;
