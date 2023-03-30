import * as React from "react";
import {graphql, HeadFC, PageProps, useStaticQuery} from "gatsby";
import {Box, Flex} from "theme-ui";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/global.css";
import PageSection from "../components/pagesection";
import {landingPageData} from "../interfaces/types";

const IndexPage: React.FC<PageProps> = () => {
  const indexQuery: landingPageData = useStaticQuery(
    graphql`
      query {
        strapiPage(pagename: {eq: "landing"}) {
          contents {
            heading {
              title
              position
              variant
            }
            subheading {
              title
              position
              variant
            }
            description {
              title
              position
              variant
            }
            position
            section
            compType
            gap
            buttons {
              text
              color
              size
              variant
            }
            img {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            backgroundimg {
              localFile {
                url
              }
            }
            darkbackgroundimg {
              localFile {
                url
              }
            }
          }
        }
      }
    `
  );
  console.log(indexQuery);

  return (
    <Box>
      <Header />
      <Flex variant="flex.main">
        {indexQuery.strapiPage.contents.map((item, i) => {
          return <PageSection data={item} key={i} />;
        })}
      </Flex>
      <Footer />
    </Box>
  );
};

export default IndexPage;
