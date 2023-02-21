import * as React from "react";
import {graphql, HeadFC, PageProps, useStaticQuery} from "gatsby";
import Button from "../library/Button";
import {Switch, useColorMode} from "theme-ui";

interface PageData {
  allStrapiContent: {
    nodes: [
      {
        Heading: string;
      }
    ];
  };
}

const IndexPage: React.FC<PageProps> = () => {
  const [mode, setMode] = useColorMode();

  const data: PageData = useStaticQuery(
    graphql`
      query {
        allStrapiContent {
          nodes {
            Heading
          }
        }
      }
    `
  );

  return (
    <div>
      <Switch
        onClick={() => {
          setMode(mode === "dark" ? "default" : "dark");
        }}
      ></Switch>
      <h1>Strapi blog</h1>
      {data.allStrapiContent.nodes.map((item, i) => {
        return <h2 key={i}>{item.Heading}</h2>;
      })}
      <Button>testing</Button>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
