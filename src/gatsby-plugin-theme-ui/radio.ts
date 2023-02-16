const radio = {
  width: "24px",
  height: "24px",
  border: "default",
  borderColor: "radio.borderColor",
  backgroundColor: "radio.bg",
  boxShadow: "radio",
  "> path": {
    fill: "none",
  },
  "input:checked ~ &": {
    borderColor: "radio.clicked",
    background: "radio.background",
  },
  "input:disabled ~ &": {
    width: "24px",
    height: "24px",
    cursor: "not-allowed",
    background: "radio.disabled",
    border: "primary",
    borderColor: "radio.disabledBorder",
  },
};
export default radio;
