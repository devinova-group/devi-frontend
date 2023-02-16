import { Theme } from "theme-ui";

const badges: Theme["badges"] = {
  primary: {
    width: "69px",
    height: "34px",
    fontFamily: "body.1",
    fontWeight: "body.2",
    fontSize: 0,
    color: "badge.primary",
    border: "one",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "transparent",
  },
  inActive: {
    variant: "badges.primary",
    color: "badge.inActive",
    borderColor: "badge.inActiveBorder",
  },
  error: {
    variant: "badges.primary",
    width: "50px",
    color: "badge.error",
    borderColor: "badge.errorBorder",
  },
  disabled: {
    variant: "badges.primary",
    width: "73px",
    color: "badge.disabled",
    borderColor: "badge.disabledBorder",
  },
  active: {
    variant: "badges.primary",
    width: "56px",
    color: "badge.active",
    borderColor: "badge.activeBorder",
  },
  default: {
    variant: "badges.primary",
    width: "65px",
    color: "white",
    backgroundColor: "default.secondary",
    borderColor: "default.white",
  },
  selected: {
    variant: "badges.primary",
    width: "73px",
    color: "badge.active",
    backgroundColor: "badge.selectedBg",
    borderColor: "badge.selectedBorder",
  },
  secondary: {
    variant: "badges.primary",
    width: "87px",
    color: "badge.secondary",
    backgroundColor: "default.secondary",
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
};
export default badges;
