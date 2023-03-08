import {Theme} from "theme-ui";
/* Switch */
import moonBig from "./icons/switch/moonBig.svg";
import backgroundV2Big from "./icons/switch/backgroundV2Big.svg";
import backgroundV1BigMoon from "./icons/switch/backgroundV1BigMoon.svg";
import backgroundV1BigSun from "./icons/switch/backgroundV1BigSun.svg";
import backgroundV1SmallMoon from "./icons/switch/backgroundV1SmallMoon.svg";
import backgroundV1SmallSun from "./icons/switch/backgroundV1SmallSun.svg";
import backgroundV2BigLight from "./icons/switch/backgroundV2BigLight.svg";
import backgroundV2BigSun from "./icons/switch/backgroundV2BigSun.svg";
import bgV2SmallDark from "./icons/switch/bgV2SmallDark.svg";
import moonSmall from "./icons/switch/moonSmall.svg";
import bgV2SmallLight from "./icons/switch/bgV2SmallLight.svg";
import bgV2SmallSun from "./icons/switch/bgV2SmallSun.svg";
/* Login */
import password from "./icons/login/password.svg";
import username from "./icons/login/username.svg";
/* Radio */
import radioLight from "./icons/radio/radioLight.svg";
import radioDark from "./icons/radio/radioDark.svg";
/* Card */
import arrowDown from "./icons/card/arrowDown.svg";
import arrowUp from "./icons/card/arrowUp.svg";
import arrowDownDark from "./icons/card/arrowDownDark.svg";
import arrowUpDark from "./icons/card/arrowUpDark.svg";
/* Check */
import checkLightSvg from "./icons/check/checkLight.svg";
import checkLightDisabled from "./icons/check/checkDisabledLight.svg";
import checkDark from "./icons/check/checkDark.svg";
import checkDarkDisabled from "./icons/check/checkDarkDisabled.svg";
/* Field */
import errorDark from "./icons/field/fieldErrorDark.svg";
import fieldErrorDark from "./icons/field/fieldErrorDarkSvg.svg";
import fieldSearchDark from "./icons/field/textFieldSearchDark.svg";
import fieldBackground from "./icons/field/fieldBackground.svg";
import textField from "./icons/field/textField.svg";
import fieldError from "./icons/field/textFieldError.svg";
import fieldSearch from "./icons/field/textFieldSearch.svg";

const colors: Theme["colors"] = {
  neutral: [
    "#5B5F70",
    "#4F5462",
    "#4D5160",
    "#3A3E48",
    "#373944",
    "#2B303A",
    "#1F2228",
    "#121418",
  ],
  primary: ["#6044B5", "#4F3894", "#473285", "#3B2A6F", "#332460"],
  secondary: ["#009797", "#008A8A", "#006666", "#005757", "#004242"],
  success: ["#60A83C", "#1EA338", "#17802D", "#0E7248", "#133F1B"],
  error: ["#ED0C12", "#DD0915", "#CA070E", "#A3040C", "#460205"],
  warning: ["#EEAD44", "#CB8B3A", "#B47B33", "#9E6C2D", "#5C3C14"],
  notification: ["#3183C8", "#2769A0", "#1D4F78", "#194264", "#0F2B43"],
  information: ["#6B798A", "#5F6B7A", "#555B68", "#414244", "#343537"],
  services: {
    bordershadow: "#CACFD9",
    background: "#EDF0F7",
  },
  button: {
    error: "#C12945",
    errorDisabled: "#E094A2",
    positive: "#26962B",
    positiveDisabled: "#93CB95",
  },
  otherColors: {
    redShades: ["#F03738", "#FFC5C5"],
    greenShades: ["#26962B", "#B4E7B4"],
    orangeShades: ["#CC9428", "#FCE2B0"],
    blueShades: ["#3C6DA6", "#D4E1F2"],
    darkGreyShades: ["#5F5F5F", "#CECFD0"],
  },

  check: {
    background: `url(${checkLightSvg}) no-repeat center center`,
    backgroundDisabled: `url(${checkLightDisabled}) no-repeat center center`,
  },
  radio: {
    bg: "transparent",
    background: `url(${radioLight}) no-repeat center center`,
  },
  field: {
    background: `url(${textField}) no-repeat 16px center`,
    errorBg: `
    url(${textField}) no-repeat 16px center, 
    url(${fieldError}) no-repeat right 16px center`,
    searchBg: `url(${fieldSearch}) no-repeat 16px center`,
  },
  shadow: {
    default: "#00000040",
    field: "#4C3A8040",
  },
  border: {},
  card: {
    arrowUp: `url(${arrowUp}) no-repeat center center`,
    arrowDown: `url(${arrowDown}) no-repeat center center`,
  },
  switch: {
    bgV1BigMoon: `url(${backgroundV1BigMoon})`,
    bgV1BigSun: `url(${backgroundV1BigSun})`,
    bgV1SmallMoon: `url(${backgroundV1SmallMoon})`,
    bgV1SmallSun: `url(${backgroundV1SmallSun})`,
    bgV2BigDark: `url(${backgroundV2Big})`,
    bgV2BigMoon: `url(${moonBig})`,
    bgV2BigLight: `url(${backgroundV2BigLight})`,
    bgV2BigSun: `url(${backgroundV2BigSun})`,
    bgV2SmallDark: `url(${bgV2SmallDark})`,
    bgV2SmallLight: `url(${bgV2SmallLight})`,
    bgV2SmallSun: `url(${bgV2SmallSun})`,
    bgV2MoonSmall: `url(${moonSmall})`,
  },
  login: {
    iconUsername: `url(${username}) no-repeat 16px center`,
    iconPassword: `url(${password}) no-repeat 16px center`,
  },
  modes: {
    dark: {
      neutral: [
        "#AEB6C5",
        "#CACFD9",
        "#D3D7DF",
        "#DADEE5",
        "#E1E6EF",
        "#EDF0F7",
        "#F1F3F9",
        "#F8F9FC",
      ],
      primary: ["#9E8BEB", "#AB9BEE", "#B6A8F0", "#D2C9F8", "#E2DEF2"],
      secondary: ["#41C2B7", "#67CEC5", "#97DED8", "#BDEAE6", "#E3F6F4"],
      success: ["#17DE67", "#88D3A6", "#A6DEBC", "#B6E7CA", "#CFF2D6"],
      error: ["#FF4C50", "#F2787A", "#EC999C", "#F8CDCE", "#F5DADA"],
      warning: ["#FFB65C", "#FFBB63", "#FFCA86", "#FBDEA7", "#FDEDCE"],
      notification: ["#64B8FF", "#7BBDF4", "#91C7F3", "#A6D5FC", "#D1EAFF"],
      information: ["#8597AD", "#AAB7C6", "#B6C1CE", "#C8D0DA", "#DBE0E7"],
      services: {
        bordershadow: "#161719",
        background: "#2B303A",
      },
      button: {
        error: "#C12945",
        errorDisabled: "#9A4454",
        positive: "#26962B",
        positiveDisabled: "#93CB95",
      },
      otherColors: {
        redShades: ["#F03738", "#A14C56"],
        greenShades: ["#3CC13B", "#37853D"],
        orangeShades: ["#FFC34E", "#AC8649"],
        blueShades: ["#B2C3FF", "#7E86B3"],
        darkGreyShades: ["#A8A1B8", "#5B596D"],
      },
      check: {
        borderColor: "#9794A0",
        background: `url(${checkDark}) no-repeat center center`,
        backgroundDisabled: `url(${checkDarkDisabled}) no-repeat center center`,
      },
      radio: {
        background: `url(${radioDark}) no-repeat center center`,
      },

      field: {
        background: `url(${fieldBackground}) no-repeat 16px center`,
        errorBg: `url(${errorDark}) no-repeat left 16px center, 
            url(${fieldErrorDark}) no-repeat right 16px center`,
        searchBg: `url(${fieldSearchDark}) no-repeat 16px center`,
      },
      shadow: {
        default: "#00000040",
        field: "#00000040",
      },
      card: {
        arrowUp: `url(${arrowUpDark}) no-repeat center center`,
        arrowDown: `url(${arrowDownDark}) no-repeat center center`,
      },
      switch: {
        bgV1BigMoon: `url(${backgroundV1BigMoon})`,
        bgV1BigSun: `url(${backgroundV1BigSun})`,
        bgV1SmallMoon: `url(${backgroundV1SmallMoon})`,
        bgV1SmallSun: `url(${backgroundV1SmallSun})`,
        bgV2BigDark: `url(${backgroundV2Big})`,
        bgV2BigMoon: `url(${moonBig})`,
        bgV2BigLight: `url(${backgroundV2BigLight})`,
        bgV2BigSun: `url(${backgroundV2BigSun})`,
        bgV2SmallDark: `url(${bgV2SmallDark})`,
        bgV2SmallLight: `url(${bgV2SmallLight})`,
        bgV2SmallSun: `url(${bgV2SmallSun})`,
        bgV2MoonSmall: `url(${moonSmall})`,
      },
      link: {
        test: "#FFF",
      },
    },
  },
};

export default colors;
