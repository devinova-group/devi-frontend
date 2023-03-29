import * as React from "react";
import { /*  graphql, */ HeadFC, PageProps /* useStaticQuery */ } from "gatsby";
import Header from "../components/header";
import "../css/global.css";
/* import PageSection from "../components/pagesection";
import { landingPageData } from "../interfaces/types"; */
import Box from "../library/Box";
import Switch from "../library/Switch";
import { useColorMode } from "theme-ui";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  /*  const indexQuery: landingPageData = useStaticQuery(
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
  console.log(indexQuery); */
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div>
      {/*     <Header /> */}
      <Layout></Layout>
    </div>
  );
};

export default IndexPage;

/* export const Head: HeadFC = () => <title>Home Page</title>; */
