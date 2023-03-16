import colors from "./colors";
import text from "./text";
import buttons from "./buttons";
import badges from "./badges";
import boxes from "./boxes"
import cards from "./cards";
import shadows from "./shadows";
import borders from "./borders";
import {switchs as switches} from "./switchs";
import field from "./field";
import radio from "./radio";
import checkbox from "./checkbox";
import links from "./links";
import grids from "./grids";
import flex from "./flex";
import heading from "./heading";
import toaster from "./toaster";
import avatars from "./avatars";
import modal from "./modal";
import spinner from "./spinner";
import radii from "./radii";
import tooltip from "./tooltip";
import images from "./images";


export const theme = {
  space: [
    0, 2, 4, 8, 12, 14, 16, 18, 21, 24, 28, 32, 36, 40, 42, 46, 48, 52, 56, 60,
    64, 72, 78, 80,
  ],
  fontSizes: [14, 15, 16, 18, 20, 21, 25, 28, 48, 56, 64, 104],
  fonts: {
    body: ["Noto Sans", "Quicksand"],
    heading: ["Neucha", "Quicksand"],
  },

  fontWeights: {
    body: [300, 400, 500, 600],
    heading: [400, 500],
  },
  letterSpacings: [1, 2, 2.5, 3, 3.5],
  zIndices: [0, 250, 500, 1000, 1500],
  breakpoints: [
    '40em', '@media (min-width: 56em) and (orientation: landscape)', '64em',
  ],
  colors,
  text,
  buttons,
  badges,
  boxes,
  cards,
  shadows,
  borders,
  switches,
  field,
  radio,
  checkbox,
  links,
  grids,
  flex,
  images,
  heading,
  toaster,
  avatars,
  modal,
  spinner,
  radii,
  tooltip,
};

export default theme;
