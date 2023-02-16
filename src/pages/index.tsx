import * as React from "react";
import {graphql, HeadFC, PageProps, useStaticQuery} from "gatsby";
import Button from "../library/Button";

interface PageData {
  allStrapiTest: {
    nodes: [
      {
        title: string;
      }
    ];
  };
}

const IndexPage: React.FC<PageProps> = () => {
  const data: PageData = useStaticQuery(
    graphql`
      query {
        allStrapiTest {
          nodes {
            title
          }
        }
      }
    `
  );
  console.log(data);

  return (
    <div>
      <h1>Strapi blog</h1>
      {data.allStrapiTest.nodes.map((item, i) => {
        return <h2 key={i}>{item.title}</h2>;
      })}
      <Button>testing</Button>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
