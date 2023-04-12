import React from "react";
import {Box, Grid, useColorMode} from "theme-ui";
import SectionImg from "./section/sectionimg";
import SectionLeft from "./section/sectionLeft";

const MainSection = ({data}: any) => {
  const [mode] = useColorMode();

  // let bgVariable =
  //   mode === "dark"
  //     ? `url(${data.darkbackgroundimg.localFile.url})`
  //     : `url(${data.backgroundimg.localFile.url})`;
  return (
    <Box></Box>
    // <Grid
    //   variant={`content.section.${data.position ?? "right"}.${
    //     data.mobilePosition ?? "top"
    //   }`}
    //   sx={{
    //     background: bgVariable,
    //   }}
    // >
    //   <SectionImg
    //     img={data.img}
    //     alternate={data.section}
    //     fit={data.imgObjectFit}
    //   />
    //   <SectionLeft data={data} />
    // </Grid>
  );
};

export default MainSection;
