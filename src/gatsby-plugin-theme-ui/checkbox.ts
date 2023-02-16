const checkbox: any = {
  width: "24px",
  height: "24px",
  border: "default",
  borderColor: "default.secondary",
  boxShadow: "radio",
  fill: "none",

  "input:focus ~ &": {
    background: "transparent",
  },

  "input:checked ~ &": {
    fill: "none",
    border: "none",
    background: "check.background",
  },
  "input:disabled ~ &": {
    width: "24px",
    height: "24px",
    cursor: "not-allowed",
    border: "transparent",
    background: "check.backgroundDisabled",
  },
};
export default checkbox;
