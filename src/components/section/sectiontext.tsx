import React from "react";
import {Flex, Grid} from "theme-ui";
import {sectionTextProps} from "../../interfaces/types";
import Text from "../../library/Text";

const SectionText = ({
  description,
  header,
  subheader,
  topsubheader,
  gap,
}: sectionTextProps) => {
  return (
    <Grid variant="centered">
      <Flex variant="flex.sectionText" sx={{gap: gap}}>
        {topsubheader ? (
          <Text
            variant={topsubheader.variant}
            sx={{display: "flex", justifyContent: topsubheader.position}}
          >
            {topsubheader.title}
          </Text>
        ) : (
          <></>
        )}
        {header ? (
          <Text
            variant={header.variant}
            sx={{display: "flex", justifyContent: header.position}}
          >
            {header.title}
          </Text>
        ) : (
          <></>
        )}
        {subheader ? (
          <Text
            variant={subheader.variant}
            sx={{display: "flex", justifyContent: subheader.position}}
          >
            {subheader.title}
          </Text>
        ) : (
          <></>
        )}
        {description ? (
          <Text
            variant={description.variant}
            sx={{display: "flex", justifyContent: description.position}}
          >
            {description.title}
          </Text>
        ) : (
          <></>
        )}
      </Flex>
    </Grid>
  );
};

export default SectionText;
