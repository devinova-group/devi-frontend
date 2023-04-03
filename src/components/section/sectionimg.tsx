import {GatsbyImage, getImage} from "gatsby-plugin-image";
import React from "react";
import {sectionImgProps} from "../../interfaces/types";

const SectionImg = ({img, alternate, fit}: sectionImgProps) => {
  const image = getImage(img.localFile);
  console.log(fit);

  return (
    <GatsbyImage
      image={image!}
      alt={alternate}
      style={{gridArea: "img"}}
      imgStyle={{objectFit: `${fit ?? "none"}`}}
    />
  );
};

export default SectionImg;
