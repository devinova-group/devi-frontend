import xcircle from "../icons/xCircle.svg";
import Check from "../icons/checkCircle.svg";
import Warning from "../icons/warning.svg";
import WarningCircle from "../icons/warningCircle.svg";
import Square from "../icons/square.svg";
import Info from "../icons/info.svg";
import CheckV2 from "../icons/check.svg";
import CircleXV2 from "../icons/circleXV2.svg";
import Message from "../icons/message.svg";
import InfoV2 from "../icons/infoV2.svg";
import WarningV2 from "../icons/warningV2.svg";
const toaster = {
  primaryV1: {
    width: "400px",
    height: "48px",
    backgroundColor: "#b9dfbb",
    display: "grid",
    gridTemplateColumns: "0.2fr 1fr 0.5fr 0.3fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    textAlign: "left",
    alignItems: "center",
    borderLeft: "4px solid #26962B",
    boxShadow: "toaster",
    borderRadius: "2px",
    margin: 8,
    ".toasterSvg": {
      width: "22px",
      height: "22px",
      background: `url(${Check}) no-repeat center`,
      gridArea: "2/1/4/2",
      marginLeft: 4,
      marginRight: 4,
    },
    ".toasterX": {
      width: "22px",
      height: "22px",
      background: `url(${xcircle}) no-repeat center`,
      gridArea: "2/5/4/6",
      marginRight: 4,
      marginLeft: 4,
      cursor: "pointer",
    },
    "svg:nth-of-type(1)": {
      width: "22px",
      height: "22px",
      gridArea: "2 / 1 / 4 / 2",
      marginLeft: 4,
      marginRight: 4,
    },

    "svg:nth-of-type(2)": {
      gridArea: "2 / 5 / 4 / 6",
      marginRight: 4,
      marginLeft: 4,
    },
    "span:nth-of-type(1)": {
      gridArea: "2 / 2 / 3 / 3",
      color: "black",
    },
    "span:nth-of-type(2)": {
      color: "#585858",
      fontSize: "11px",
      gridArea: "3 / 2 / 4 / 3",
    },
    "span:nth-of-type(3)": {
      color: "#585858",
      gridArea: "2 / 4 / 4 / 5",
    },
  },
  warningV1: {
    variant: "toaster.primaryV1",
    backgroundColor: "#f1e3d1",
    borderLeft: "4px solid #cc9428",
    ".toasterSvg": {
      width: "22px",
      height: "22px",
      background: `url(${Warning}) no-repeat center`,
      gridArea: "2/1/4/2",
      marginLeft: 4,
      marginRight: 4,
    },
  },
  errorV1: {
    variant: "toaster.primaryV1",
    backgroundColor: "#eec7cc",
    borderLeft: "4px solid #f03738",
    ".toasterSvg": {
      width: "22px",
      height: "22px",
      background: `url(${WarningCircle}) no-repeat center`,
      gridArea: "2/1/4/2",
      marginLeft: 4,
      marginRight: 4,
    },
  },
  noticeV1: {
    variant: "toaster.primaryV1",
    backgroundColor: "#bdcee7",
    borderLeft: "4px solid #4b88cf",
    ".toasterSvg": {
      width: "22px",
      height: "22px",
      background: `url(${Square}) no-repeat center`,
      gridArea: "2/1/4/2",
      marginLeft: 4,
      marginRight: 4,
    },
  },
  infoV1: {
    variant: "toaster.primaryV1",
    backgroundColor: "#d6d5da",
    borderLeft: "4px solid #585858",
    ".toasterSvg": {
      width: "22px",
      height: "22px",
      background: `url(${Info}) no-repeat center`,
      gridArea: "2/1/4/2",
      marginLeft: 4,
      marginRight: 4,
    },
  },

  primaryV2: {
    variant: "toaster.primaryV1",
    backgroundColor: "#3cc13b",
    borderLeft: "none",
    ".toasterX": {
      width: "22px",
      height: "22px",
      background: `url(${CircleXV2}) no-repeat center`,
      gridArea: "2/5/4/6",
      marginRight: 4,
      marginLeft: 4,
      cursor: "pointer",
    },
    ".toasterSvg": {
      width: "22px",
      height: "22px",
      background: `url(${CheckV2}) no-repeat center`,
      gridArea: "2/1/4/2",
      marginLeft: 4,
      marginRight: 4,
    },

    "span:nth-of-type(1)": {
      gridArea: "2 / 2 / 4 / 3",
      color: "white",
      alignSelf: "center",
    },
    "span:nth-of-type(2)": {
      gridArea: "2 / 4 / 4 / 5",
      color: "white",
    },
  },
  warningV2: {
    variant: "toaster.primaryV2",
    backgroundColor: "#f5d49d",
    ".toasterSvg": {
      width: "22px",
      height: "22px",
      background: `url(${Warning}) no-repeat center`,
      gridArea: "2/1/4/2",
      marginLeft: 4,
      marginRight: 4,
    },
  },
  errorV2: {
    variant: "toaster.primaryV2",
    backgroundColor: "#ef6b6e",
    ".toasterSvg": {
      width: "22px",
      height: "22px",
      background: `url(${WarningCircle}) no-repeat center`,
      gridArea: "2/1/4/2",
      marginLeft: 4,
      marginRight: 4,
    },
  },
  noticeV2: {
    variant: "toaster.primaryV2",
    backgroundColor: "#6396d3",
    ".toasterSvg": {
      width: "22px",
      height: "22px",
      background: `url(${Message}) no-repeat center`,
      gridArea: "2/1/4/2",
      marginLeft: 4,
      marginRight: 4,
    },
  },
  infoV2: {
    variant: "toaster.primaryV2",
    backgroundColor: "#767576",
    ".toasterSvg": {
      width: "22px",
      height: "22px",
      background: `url(${InfoV2}) no-repeat center`,
      gridArea: "2/1/4/2",
      marginLeft: 4,
      marginRight: 4,
    },
  },
};

export default toaster;
