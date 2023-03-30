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

export type imagePosition = "bot" | "top" | "right" | "left";

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
  topsubheading: textComponent;
  heading: textComponent;
  subheading: textComponent;
  description: textComponent;
  position: imagePosition;
  compType: componentType;
  buttons: [button];
  section: string;
  gap: number;
  mobilePosition: "bottom" | "top";
  imgObjectFit: objfit;
  img: {
    localFile: any;
  };
  backgroundimg: {
    localFile: any;
  };
  darkbackgroundimg: {
    localFile: any;
  };
  services: [
    {
      servicename: string;
      title: textComponent;
      description: textComponent;
      img: {
        localFile: any;
      };
    }
  ];
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
