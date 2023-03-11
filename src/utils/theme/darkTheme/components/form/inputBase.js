import colors from "../../base/colors";

const { transparent, primary } = colors;

const inputBase = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      borderColor: primary.main,
      "& .MuiOutlinedInput-notchedOutline, &:before": {
        borderColor: primary.main,
      },

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: primary.main,
      },
      "& .MuiNotchedOutline": {
        borderColor: primary.main,
      },
      "& .MuiFormLabel-root-MuiInputLabel-root": {
        color: primary.main,
      },
    },
  },
};
export default inputBase;
