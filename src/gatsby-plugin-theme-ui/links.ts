const links: any = {
  cursor: "pointer",
  color: "black",
  nav: {
    fontWeight: "100",
    cursor: "pointer",
    color: "black",
    px: 2,
    py: 1,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  menu: {
    color: "black",
  },
  desktop: {
    fontFamily: "OpenSans",
    fontStyle: "regular",
    fontWeight: "300",
    cursor: "pointer",
    boxSizing: "border-box",
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "2px solid transparent",
    "&:hover": {
      borderColor: "#6044B5",
      boxSizing: "border-box",
    }
  },
  mobile: {
    fontWeight: "100",
    cursor: "pointer",
    color: "#2B303A",
    display: "flex",
    alignItems: "center",
    paddingLeft: "2rem",
    background: "transparent",
    height: "3rem",
    "&:hover": {
      background: "linear-gradient(45deg, #6044B5, #EDF0F7);",
      height: "3rem",
      paddingLeft: "2rem",
      color: "#fff",
      boxSizing: "border-box",
    }
  },
  subHead: {
    fontWeight: "100",
    cursor: "pointer",
    marginTop: "15px",
    marginBottom: "15px",
    marginLeft: "20px",
    boxSizing: "border-box",
    borderBottom: "3px solid transparent",
    "&:hover": {
      borderColor: "#6044B5",
      boxSizing: "border-box",
    }
  },
};

export default links;
