/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import borders from "../../base/borders";
import colors from "../../base/colors";
import typography from "../../base/typography";

// Material Kit 2 React Base Styles

const { info, inputBorderColor, dark } = colors;
const { size } = typography;
const { borderWidth } = borders;

const input = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: "1px solid green",
        // `${borderWidth[1]} solid ${inputBorderColor}`
      },

      "&:before": {
        borderColor: inputBorderColor,
      },

      "&:after": {
        borderColor: info.main,
      },
    },
  },
};
export default input;
