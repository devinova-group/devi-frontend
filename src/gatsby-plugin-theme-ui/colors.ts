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
  config: {
    initialColorModeName: "light",
  },

  default: {
    primary: "#6044B5",
    secondary: "#4C3A80",
    secondaryVariant: "#6E6893",
    background: "#F6F7FB",
    surfaces: "#FFFFFF",
    text: "#4A4458",
    disabledText: "#7E778D",
    hightlight: "#6044B5",
    hightlight2: "#8477A8",
    hightlight3: "#FFFEFB",
    surfaceHightlight: "#EAE4FA",
    divadeColor: "#D8D3DA",
    outlines: "#D8D3DA",
    hovers: "#6044B5",
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
      default: {
        primary: "#7B4EFF",
        secondary: "#A689FF",
        secondaryVariant: "#7E778D",
        background: "#2F2A41",
        surfaces: "#4A4458",
        text: "#FFFEFB",
        disabledText: "#7E778D",
        hightlight: "#A689FF",
        hightlight2: "#746E83",
        hightlight3: "#746E83",
        surfaceHightlight: "#292336",
        divadeColor: "#7E778D",
        outlines: "#6B6278",
        hovers: "#7B4EFF",
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
