import colors from "../../base/colors";

const { transparent } = colors;

const textField = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      "&.textFieldBright": {
        color: "#ffffff",
      },
    },
  },
};
export default textField;
