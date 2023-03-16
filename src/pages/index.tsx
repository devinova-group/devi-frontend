import * as React from "react";
import { graphql, HeadFC, PageProps, useStaticQuery } from "gatsby";
import Button from "../library/Button";
import Tooltip from "../library/Tooltip";
import Badge from "../library/Badge";
import Card from "../library/Card";
import Heading from "../library/Heading";
import Radio from "../library/Radio";
import Label from "../library/Label";
import Box from "../library/Box";
import Image from "../library/Image";
import Text from "../library/Text";
import Checkbox from "../library/Checksbox";
import Switch from "../library/Switch";
import { Global, useColorMode } from "theme-ui";
import { useState } from "react";
import Avatar from "../library/Avatar";
import Modal from "../library/Modal";
import Field from "../library/Field";
import Navbar from "../library/Navbar";
import "../layout.css";
import DeviMenu from "../DeviMenu";
import AboutPage from "./about";

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
  // const data: PageData = useStaticQuery(
  //   graphql`
  //     query {
  //       allStrapiTest {
  //         nodes {
  //           title
  //         }
  //       }
  //     }
  //   `
  // );
  const [colorMode, setColorMode] = useColorMode();
  const [click, setClick] = useState(true);
  return (
    <>
      <DeviMenu />
      <Box
        sx={{
          background: "default.background",
          color: "default.text",
        }}
      >
        <Box sx={{ height: "60rem" }}>Home</Box>
        <Box sx={{ height: "50rem" }} id="section-1">
          About
        </Box>
      </Box>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
