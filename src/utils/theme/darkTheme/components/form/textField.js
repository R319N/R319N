import colors from "../../base/colors";

const { transparent, primary } = colors;

const textField = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      borderColor: primary.main,
      "&.textFieldBright": {
        color: "#ffffff",
      },
    },
  },
};
export default textField;
