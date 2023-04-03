import * as React from "react";
import {graphql, PageProps, useStaticQuery} from "gatsby";
import {Box, Flex} from "theme-ui";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/global.css";
import PageSection from "../components/pagesection";
import {landingPageData} from "../interfaces/types";
import {Helmet} from "react-helmet";

const IndexPage: React.FC<PageProps> = () => {
  const indexQuery: landingPageData = useStaticQuery(
    graphql`
      query {
        strapiPage(pagename: {eq: "landing"}) {
          pagename
          comps {
            sectionName
            header
          }
        }
      }
    `
  );
  console.log(indexQuery);

  return (
    <Box>
      <Helmet title="testing" />
      <Header />
      <Flex variant="flex.main">
        {/* {indexQuery.strapiPage.contents.map((item, i) => {
          return <PageSection data={item} key={i} />;
        })} */}
      </Flex>
      <Footer />
    </Box>
  );
};

export default IndexPage;
