import {title} from "process";
import buttons from "../gatsby-plugin-theme-ui/buttons";
import heading from "../gatsby-plugin-theme-ui/heading";
import text from "../gatsby-plugin-theme-ui/text";

export type textVariants =
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "Subhead"
  | "Body1"
  | "Body2"
  | "Button"
  | "Caption"
  | "SmallCaption"
  | "Overline";

export type positionVariants = "left" | "center" | "right";

export interface textComponent {
  title: string;
  position: positionVariants;
  variant: textVariants;
}

export type imagePosition = "right" | "left";

export type componentType = "main" | "services" | "contact";

type buttonVariant = "outlined" | "default" | "text";

type buttonSize = "small" | "medium" | "large";

type buttonColor = "primary" | "error" | "success";

type objfit = "none" | "contain" | "cover" | "fill" | "scale-down";

interface button {
  text: string;
  color: buttonColor;
  size: buttonSize;
  variant: buttonVariant;
}

export const variantMapping = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  Subhead: "h6",
  Body1: "p",
  Body2: "p",
  Button: "span",
  Caption: "span",
  SmallCaption: "span",
  Overline: "span",
};

export interface landingPageData {
  strapiPage: {
    contents: [content];
  };
}

type content = {
  compType: string;
  sectionName: string;
  section: {
    section: string;
    heading: textComponent;
    subheading: textComponent;
    body: textComponent;
    buttons: [button];
    gap: number;
    imgPosition: imagePosition;
    mobileImgPosition: string;
    objectFit: objfit;
  };
  services: {
    serviceName: string;
    title: textComponent;
    body: textComponent;
    img: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: any;
        };
      };
    };
  };
  text: {
    section: string;
    heading: textComponent;
    body: textComponent;
    bgColor: string;
    mobilePosition: string;
    position: string;
    img: {
      localFile: {
        childImageSharp: {
          gatsbyImageData: any;
        };
      };
    };
  };
};

export interface contentData {
  data: content;
}

export interface sectionTextProps {
  topsubheader?: textComponent;
  header?: textComponent;
  subheader?: textComponent;
  description?: textComponent;
  gap?: number;
}

export interface sectionButtonProps {
  buttons?: [button];
}

export interface sectionImgProps {
  img: {localFile: any};
  alternate: string;
  fit?: objfit;
}
