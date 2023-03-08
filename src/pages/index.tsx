import * as React from "react";
import {graphql, HeadFC, PageProps, useStaticQuery} from "gatsby";
import {Box} from "theme-ui";
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
            services {
              servicename
              img {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 387, formats: [AUTO])
                  }
                }
              }
              title {
                title
                position
                variant
              }
              description {
                title
                position
                variant
              }
            }
            img {
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
      {indexQuery.strapiPage.contents.map((item, i) => {
        return <PageSection data={item} key={i} />;
      })}
      <Footer />
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
