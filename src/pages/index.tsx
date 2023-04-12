import * as React from "react";
import {graphql, PageProps, useStaticQuery} from "gatsby";
import {Box, Flex} from "theme-ui";
import Header from "../components/header";
import Footer from "../components/footer";
import "../css/global.css";
import PageSection from "../components/pagesection";
import {Helmet} from "react-helmet";
import Button from "../library/Button";
import {gql, useQuery} from "@apollo/client";

const IndexPage: React.FC<PageProps> = () => {
  const {data} = useQuery(gql`
    query {
      page(id: 1) {
        data {
          attributes {
            comps {
              __typename
              ... on ComponentBlocksFeatures {
                cards {
                  header
                  body
                }
              }
              ... on ComponentBlocksSection {
                text {
                  body
                  position
                  variant
                }
              }
            }
          }
        }
      }
    }
  `);
  console.log(data?.page.data.attributes.comps);
  let comps = data?.page.data.attributes.comps;
  return (
    <Box sx={{backgroundColor: "background"}}>
      <Helmet title="testing" />
      <Header />
      <Flex variant="flex.main">
        <Button colorVariant="warning" variant="default" size="large">
          Default
        </Button>
        <Button colorVariant="information" variant="outlined" size="medium">
          Outlined
        </Button>
        <Button colorVariant="primary" variant="text" size="small">
          Text
        </Button>
        {comps?.map((item: any, i: number) => {
          return <PageSection data={item} key={i} />;
        })}
      </Flex>
      <Footer />
    </Box>
  );
};

export default IndexPage;
