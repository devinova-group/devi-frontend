import { Theme } from "theme-ui";

const buttons: Theme["buttons"] = {
  primary: {
    medium: {
      width: "150px",
      height: "50px",
      fontFamily: "button.1",
      fontStyle: "normal",
      fontSize: 5,
      cursor: "pointer",
      backgroundColor: "default.primary",
      boxShadow: "button",
      borderRadius: "8px",
      margin: 2,
      padding: 0,

      "&:hover": {
        backgroundColor: "transparent",
        color: "default.primary",
        border: "default",
        borderColor: "default.primary",
      },
      "&:disabled": {
        backgroundColor: "default.primary",
        color: "#938ca3",
        "&:hover": {
          cursor: "not-allowed",
          backgroundColor: "none",
          /* color: "none", */
          border: "default.otherColors.darkGreyShades.1",
          borderColor: "none",
        },
      },
      "&:focus": {
        backgroundColor: "default.secondary",
        color: "white",
      },
    },
    small: {
      variant: "buttons.primary.medium",
      width: "105px",
      height: "35px",
      fontSize: 14,
    },
    large: {
      variant: "buttons.primary.medium",
      width: "259px",
      height: "73px",
      fontFamily: "body.1",
      fontStyle: "normal",
      fontSize: 5,
    },
  },
  error: {
    medium: {
      variant: "buttons.primary.medium",
      backgroundColor: "button.error",
      "&:hover": {
        backgroundColor: "transparent",
        color: "button.error",
        border: "default",
        borderColor: "button.errors",
      },
      "&:focus": {
        backgroundColor: "button.errors",
        color: "white",
      },
      "&:disabled": {
        backgroundColor: "button.errorDisabled",
        "&:hover": {
          cursor: "not-allowed",
          backgroundColor: "none",
          border: "none",
          borderColor: "none",
          color: "white",
        },
      },
    },
    small: {
      variant: "buttons.error.medium",
      width: "105px",
      height: "35px",
      fontSize: 14,
    },
    large: {
      variant: "buttons.error.medium",
      width: "259px",
      height: "73px",
      fontFamily: "body.1",
      fontStyle: "normal",
      fontSize: 4,
    },
  },
  success: {
    medium: {
      variant: "buttons.primary.medium",
      backgroundColor: "button.positive",
      "&:hover": {
        backgroundColor: "transparent",
        color: "button.positive",
        border: "button",
        borderColor: "button.positive",
      },
      "&:focus": {
        backgroundColor: "button.positive",
        color: "button.white",
      },
      "&:disabled": {
        backgroundColor: "button.positiveDisabled",
        "&:hover": {
          cursor: "not-allowed",
          backgroundColor: "none",
          border: "none",
          borderColor: "none",
          color: "default.white",
        },
      },
    },
    small: {
      variant: "buttons.success.medium",
      width: "105px",
      height: "35px",
      fontSize: 14,
    },
    large: {
      variant: "buttons.success.medium",
      width: "259px",
      height: "73px",
      fontFamily: "body.1",
      fontStyle: "normal",
      fontSize: 5,
    },
  },
  mobile: {
    large: {
      variant: "buttons.primary.large",
      width: "72px",
      height: "72px",
    },
    medium: {
      variant: "buttons.primary.medium",
      width: "60px",
      height: "60px",
    },
    small: {
      variant: "buttons.primary.small",
      width: "42px",
      height: "42px",
    },
  },

  mobileError: {
    large: {
      variant: "buttons.error.large",
      width: "72px",
      height: "72px",
    },
    medium: {
      variant: "buttons.error.medium",
      width: "60px",
      height: "60px",
    },
    small: {
      variant: "buttons.error.small",
      width: "42px",
      height: "42px",
    },
  },
  mobileSuccess: {
    large: {
      variant: "buttons.success.large",
      width: "72px",
      height: "72px",
    },
    medium: {
      variant: "buttons.success.small",
      width: "60px",
      height: "60px",
    },
    small: {
      variant: "buttons.success.small",
      width: "42px",
      height: "42px",
    },
  },
  learnMore: {
    width: "150px",
    height: "59px",
    fontFamily: "body.0",
    fontWeight: "body.3",
    boxShadow: "button",
    fontSize: 5,
    borderRadius: "6px",
    backgroundColor: "default.primary",
  },
  login: {
    variant: "buttons.primary",
    width: "314px",
    height: "50px",
    fontWeight: "body.3",
  },
};
export default buttons;
