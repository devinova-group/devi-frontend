import React from "react";
import {Grid, useColorMode} from "theme-ui";
import {contentData} from "../interfaces/types";
import SectionImg from "./section/sectionimg";
import SectionLeft from "./section/sectionLeft";

const MainSection = ({data}: contentData) => {
  const [mode] = useColorMode();

  let bgVariable =
    mode === "dark"
      ? `url(${data.darkbackgroundimg.localFile.url})`
      : `url(${data.backgroundimg.localFile.url})`;
  return (
    <Grid
      variant={`content.section.${data.position ?? "right"}.${
        data.mobilePosition ?? "top"
      }`}
      sx={{
        background: bgVariable,
      }}
    >
      <SectionImg
        img={data.img}
        alternate={data.section}
        fit={data.imgObjectFit}
      />
      <SectionLeft data={data} />
    </Grid>
  );
};

export default MainSection;
