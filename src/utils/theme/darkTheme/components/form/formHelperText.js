import colors from "../../base/colors";

const { error } = colors;
const formHelperText = {
  styleOverrides: {
    root: {
      color: error.main,
      textTransform: "capitalize",
    },
  },
};
export default formHelperText;
