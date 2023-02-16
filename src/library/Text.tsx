import { Text as TextThemeUi } from "theme-ui";
import { TextProps as TextPropsThemeUi } from "theme-ui";

export interface TextProps extends TextPropsThemeUi {
  size?:
    | "display"
    | "title1"
    | "title2"
    | "subhead"
    | "body1"
    | "body2"
    | "body3"
    | "caption"
    | "button"
    | "overline";
  variant?: "notoSans" | "quicksand";
}
const Text = (props: TextProps) => (
  <TextThemeUi
    {...props}
    variant={`${props.size}.${props.variant}`}
  ></TextThemeUi>
);
export default Text;
