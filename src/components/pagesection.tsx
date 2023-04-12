import React from "react";
import MainSection from "./mainsection";
import ServicesSection from "./servicessection";

const PageSection = ({data}: any) => {
  let section = <></>;

  switch (data.__typename) {
    case "ComponentBlocksSection":
      section = <MainSection data={data} />;

      break;

    case "ComponentBlocksFeatures":
      section = <ServicesSection data={data} />;
      break;

    default:
      break;
  }
  return section;
};

export default PageSection;
