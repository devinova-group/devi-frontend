import {Theme} from "theme-ui";

const tooltip: Theme["buttons"] = {
  primary: {
    backgroundColor: "default.secondary",
    px: 3,
    py: 2,
    zIndex: 5,
    borderRadius: 5,
    maxWidth: "10rem",
    maxHeight: "10rem",
    color: "white",
    overflow: "visible",
    "::After": {
      content: '" "',
      position: "absolute",
      borderStyle: "solid",
      borderWidth: "5px",
      borderColor: "transparent",
    },
  },
  top: {
    primary: {
      variant: "tooltip.primary",
    },
    arrow: {
      variant: "tooltip.primary",
      "::after": {
        top: "100%",
        left: "50%",
        marginLeft: "-5px",
        borderTopColor: "default.secondary",
      },
    },
  },
  bottom: {
    primary: {
      variant: "tooltip.primary",
    },
    arrow: {
      variant: "tooltip.primary",
      "::after": {
        bottom: "100%",
        left: "50%",
        marginLeft: "-5px",
        borderBottomColor: "default.secondary",
      },
    },
  },
  right: {
    primary: {
      variant: "tooltip.primary",
    },
    arrow: {
      variant: "tooltip.primary",
      "::after": {
        right: "100%",
        top: "50%",
        marginTop: "-5px",
        borderRightColor: "default.secondary",
      },
    },
  },
  left: {
    primary: {
      variant: "tooltip.primary",
    },
    arrow: {
      variant: "tooltip.primary",
      "::after": {
        top: "50%",
        left: "100%",
        marginTop: "-5px",
        borderLeftColor: "default.secondary",
      },
    },
  },
  // dark: {
  //   primary: {
  //     variant: "tooltip.primary",
  //   },
  //   arrow: {
  //     variant: "tooltip.arrow",
  //   },
  // },
};

export default tooltip;
