import { forwardRef } from "react";
import PropTypes from "prop-types";
import Gene20DrawerRoot from "./Gene20DrawerRoot";


const Gene20Drawer = forwardRef(
  ({ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow, ...rest }, ref) => (
    <Gene20DrawerRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
    />
  )
);

// Setting default values for the props of MDBox
Gene20Drawer.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  coloredShadow: "none",
};

// Typechecking props for the MDBox
Gene20Drawer.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
  coloredShadow: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "none",
  ]),
};
Gene20Drawer.displayName ="Gene20Drawer"
export default Gene20Drawer;
