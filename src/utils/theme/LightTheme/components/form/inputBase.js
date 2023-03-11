import colors from "../../base/colors";

const { transparent, secondary, primary } = colors;

const inputBase = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      "& .MuiOutlinedInput-notchedOutline, &:hover": {
        borderColor: primary.main,
      },
      "& .MuiOutlinedInput-notchedOutline, &:hover": {
        borderColor: secondary.main,
      },
    },
  },
};
export default inputBase;
