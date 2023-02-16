import React from "react";
import {Button as ButtonThemeUi} from "theme-ui";
import {ButtonProps as ThemeUIButtonProps} from "theme-ui";

export interface ButtonProps extends ThemeUIButtonProps {
  size?: "small" | "medium" | "large" | "";
  variant?: "primary" | "error";
}

const Button = (props: ButtonProps) => (
  <ButtonThemeUi
    {...props}
    variant={`${props.variant ?? "primary"}.${props.size ?? "medium"}`}
  ></ButtonThemeUi>
);

export default Button;
