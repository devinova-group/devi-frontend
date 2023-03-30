import React from "react";
import {Flex, Grid} from "theme-ui";
import {contentData} from "../../interfaces/types";
import SectionText from "./sectiontext";
import SectionButton from "./setionbutton";

const SectionLeft = ({data}: contentData) => {
  return (
    <Grid sx={{gridArea: "left", placeContent: "center"}}>
      <Flex sx={{flexDirection: "column"}}>
        <SectionText
          header={data.heading}
          subheader={data.subheading}
          description={data.description}
          gap={data.gap}
        />
        <SectionButton buttons={data.buttons} />
      </Flex>
    </Grid>
  );
};

export default SectionLeft;
