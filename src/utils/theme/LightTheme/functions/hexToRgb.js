import chroma from "chroma-js";
import colors from "../base/colors";
const { background } = colors;
function hexToRgb(color) {
  return chroma(color).rgb().join(", ");
}

export default hexToRgb;
