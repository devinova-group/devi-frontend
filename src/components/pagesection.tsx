import React from "react";
import {contentData} from "../interfaces/types";
import ContactSection from "./contactsection";
import MainSection from "./mainsection";
import ServicesSection from "./servicessection";

const PageSection = ({data}: contentData) => {
  let section = <></>;

  switch (data.compType) {
    case "contact":
      section = <ContactSection data={data} />;
      break;

    case "main":
      section = <MainSection data={data} />;

      break;

    case "services":
      section = <ServicesSection data={data} />;
      break;

    default:
      break;
  }
  return section;
};

export default PageSection;
