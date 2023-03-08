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
    contents: [
      {
        heading: textComponent;
        subheading: textComponent;
        description: textComponent;
        position: imagePosition;
        section: string;
        compType: componentType;
        services: [
          {
            servicename: string;
            img: {
              localFile: any;
            };
            title: textComponent;
            description: textComponent;
          }
        ];
        img: {
          localFile: {
            url: string;
          };
        };
      }
    ];
  };
}

type content = {
  heading: textComponent;
  subheading: textComponent;
  description: textComponent;
  position: imagePosition;
  section: string;
  compType: componentType;
  services: [
    {
      servicename: string;
      img: {
        localFile: any;
      };
      title: textComponent;
      description: textComponent;
    }
  ];
  img: {
    localFile: {
      url: string;
    };
  };
};

export interface contentData {
  data: content;
}
