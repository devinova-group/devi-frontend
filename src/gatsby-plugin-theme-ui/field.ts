const field: any = {
  text: {
    width: "314px",
    height: "50px",
    border: "default",
    borderColor: "field.borderColor",
    boxShadow: "field",
    borderRadius: "6px",
    background: "field.background",
    backgroundColor: "default.surfaces",
    margin: 10,
    textIndent: "32px",
    "&::placeholder": {
      fontFamily: "body.1",
      fontSize: 2,
      fontWeight: 2,
      letterSpacing: 0,
      color: "field.placeholder",
    },
    "&:focus": {
      outline: "none",
      borderColor: "field.borderColorClick",
    },
    "&:disabled": {
      backgroundColor: "field.disabled",
      borderColor: "field.disabledBorder",
      cursor: "not-allowed",
    },
  },
  textError: {
    variant: "field.text",
    borderColor: "field.disabledBorder",
    background: "field.errorBg",
    backgroundColor: "field.errorBackground",
  },
  search: {
    variant: "field.text",
    width: "240px",
    height: "50px",
    background: "field.searchBg",
    backgroundColor: "field.searchBackground",
    borderColor: "field.searchBorder",
    "&:focus": {
      outline: "none",
      borderColor: "field.borderColorClick",
    },
  },
  username: {
    variant: "field.text",
    width: "314px",
    height: "50px",
    background: "login.iconUsername",
    backgroundColor: "field.searchBackground",
    borderColor: "field.borderColorClick",
    "&::placeholder": {
      fontFamily: "body.2",
      fontSize: 2,
      fontWeight: 2,
      letterSpacing: 0,
      color: "#A3A3A3",
    },
    "&:focus": {
      outline: "none",
      borderColor: "field.borderColorClick",
    },
  },
  password: {
    variant: "field.username",
    background: "login.iconPassword",
  },
};

export default field;
