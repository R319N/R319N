import borders from "../base/borders";
import boxShadows from "../base/boxShadows";

const { borderRadius } = borders;

const avatar = {
  styleOverrides: {
    root: {
      transition: "all 200ms ease-in-out",
      background: "inherit",
      boxShadow: boxShadows.lg,
    },

    rounded: {
      borderRadius: borderRadius.lg,
    },

    img: {
      height: "auto",
    },
  },
};
export default avatar;
