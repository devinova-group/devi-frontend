const boxes: any = {
  nav: {
    // position: "fixed",
    width: "100%",
    height: "7rem",
    gap: "30px",
    float: "right",
    backgroundColor: "#F1F3F9",
  },
  desktopLinks: {
    display: "flex",
    flexDirection: "row",
    float: "right",
    alignItems: "center",
    height: "100%",
    // position: "fixed",
    gap: "30px",
    marginRight: "30px",
    "@media screen and (max-width: 40em)": {
      display: "none",
    },
  },
  mobileLinks: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    float: "left",
    marginTop: "5rem"
  },
  subLinks: {
    marginLeft: "30px", 
    borderLeft: "2px solid black"
  },
  alignLogo: {
    display: "flex",
    flexDirection: "row",
    float: "left",
    alignItems: "center",
    height: "100%",
    marginLeft: "30px",
    "@media screen and (max-width: 40em)": {
      display: "none",},
  },
  };
  
  export default boxes;