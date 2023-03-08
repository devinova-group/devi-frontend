import {GatsbyImage, getImage} from "gatsby-plugin-image";
import React from "react";
import {Box, Grid} from "theme-ui";
import {contentData} from "../interfaces/types";
import Text from "../library/Text";

const ServicesSection = ({data}: contentData) => {
  return (
    <Grid variant={`content.services`}>
      <Text
        variant={data.heading.variant}
        sx={{
          gridArea: "h",
          display: "flex",
          justifyContent: data.heading.position,
        }}
      >
        {data.heading.title}
      </Text>
      {data.services.map((item, i) => {
        const image = getImage(item.img.localFile);
        return (
          <Box key={i} variant="box.content.service">
            <Box variant="box.content.servicetitleimage">
              <Text
                variant={item.title.variant}
                sx={{
                  display: "flex",
                  justifyContent: item.title.position,
                }}
              >
                {item.title.title}
              </Text>
              <GatsbyImage image={image!} alt={item.title.title} />
            </Box>
            <Text
              variant={item.description.variant}
              sx={{
                display: "flex",
                justifyContent: item.description.position,
              }}
            >
              {item.description.title}
            </Text>
          </Box>
        );
      })}
    </Grid>
  );
};

export default ServicesSection;
