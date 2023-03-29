import React from "react";
import { contentData } from "../interfaces/types";
import Grid from "../library/Grid";
import Image from "../library/Image";
import Text from "../library/Text";

const MainSection = ({ data }: contentData) => {
  return (
    <Grid variant={`content.main.${data.position ?? "right"}`}>
      {data.img ? (
        <Image src={data.img.localFile.url} sx={{ gridArea: "i" }} />
      ) : (
        <></>
      )}
      {data.heading ? (
        <Text
          variant={data.heading.variant ?? "H6"}
          sx={{
            gridArea: "h",
            display: "flex",
            justifyContent: data.heading.position,
          }}
        >
          {data.heading.title}
        </Text>
      ) : (
        <></>
      )}
      {data.subheading ? (
        <Text
          variant={data.subheading.variant ?? "H6"}
          sx={{
            gridArea: "sh",
            display: "flex",
            justifyContent: data.subheading.position,
          }}
        >
          {data.subheading.title}
        </Text>
      ) : (
        <></>
      )}
      {data.description ? (
        <Text
          variant={data.description.variant ?? "Body2"}
          sx={{
            gridArea: "b",
            display: "flex",
            justifyContent: data.description.position,
          }}
        >
          {data.description.title}
        </Text>
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default MainSection;
