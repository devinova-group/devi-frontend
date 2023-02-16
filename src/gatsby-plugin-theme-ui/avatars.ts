import active from "./icons/avatar/activeAvatar.svg";
import pencil from "./icons/avatar/pencilAvatar.svg";
import notDisturb from "./icons/avatar/notdisturb.svg";
import away from "./icons/avatar/away.svg";
import notavailable from "./icons/avatar/notavailable.svg";
import error from "./icons/avatar/error.svg";

const avatars = {
  default: {
    width: "64px",
    height: "64px",
    position: "relative",
    borderRadius: "50%",
    backgroundColor: "#6044b5",
    margin: 2,
    h6: {
      top: 7,
      left: 7,
      color: "white",
    },
    img: {
      borderRadius: "50%",
    },
  },
  login: {
    variant: "avatars.default",
    width: "128px",
    height: "128px",
    h6: {
      top: 43,
      left: 43,
      color: "white",
      fontSize: "32px",
    },
    img: {
      borderRadius: "50%",
    },
  },
  active: {
    variant: "avatars.default",
    div: {
      bottom: 0,
      right: 2,
      width: "18px",
      height: "18px",
      backgroundImage: `url(${active})`,
      cursor: "pointer",
    },
  },
  edit: {
    variant: "avatars.active",
    div: {
      bottom: 0,
      right: 2,
      width: "18px",
      height: "18px",
      backgroundImage: `url(${pencil})`,
      cursor: "pointer",
    },
  },
  notdisturb: {
    variant: "avatars.active",
    div: {
      bottom: 0,
      right: 2,
      width: "18px",
      height: "18px",
      backgroundImage: `url(${notDisturb})`,
      cursor: "pointer",
    },
  },
  busy: {
    variant: "avatars.active",
    div: {
      bottom: 0,
      right: 2,
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      backgroundColor: "#c12945",
      cursor: "pointer",
    },
  },
  away: {
    variant: "avatars.active",
    div: {
      bottom: 0,
      right: 2,
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      backgroundImage: `url(${away})`,
      cursor: "pointer",
    },
  },
  notAvailable: {
    variant: "avatars.active",
    div: {
      bottom: 0,
      right: 2,
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      backgroundImage: `url(${notavailable})`,
      cursor: "pointer",
    },
  },
  error: {
    variant: "avatars.active",
    div: {
      bottom: 0,
      right: 2,
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      backgroundImage: `url(${error})`,
      cursor: "pointer",
    },
  },
};

export default avatars;
