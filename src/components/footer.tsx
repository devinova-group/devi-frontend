/* import {useStaticQuery, graphql} from "gatsby"; */
import * as React from "react";
import Box from "../library/Box";
import NavLink from "../library/NavLink";

import Text from "../library/Text";

const mock = {
  title: "Gothenburg office",
  email: "info@devinova.se",
  adress: "Fabriksgatan 7, 412 50",
  number: "+46 73 250 0582",
  location: "Gothenburg, Sweden",
};

interface FooterData {
  allStrapiContent: {
    nodes: [
      {
        Heading: string;
      }
    ];
  };
}

const Footer = () => {
  // const data: FooterData = useStaticQuery(
  //   graphql`
  //     query {
  //       allStrapiContent {
  //         nodes {
  //           Heading
  //         }
  //       }
  //     }
  //   `
  // );
  return (
    <Box variant="box.footer">
      <Box>
        <li>
          <Text variant="Button">{mock.title}</Text>
          <br />
          <Text variant="Caption">{mock.adress}</Text>
        </li>
        <li>
          <Text variant="Caption">{mock.location}</Text>
        </li>
        <li>
          <Text variant="Caption">{mock.email}</Text>
        </li>
        <li>
          <Text variant="Caption">{mock.number}</Text>
        </li>
      </Box>
      <Box>
        <NavLink>People</NavLink>
        <NavLink>Data & Privacy</NavLink>
        <NavLink>Manage cookies</NavLink>
      </Box>
      <Box>
        <NavLink>linkedin</NavLink>
        <NavLink>instagram</NavLink>
        <NavLink>twitter</NavLink>
      </Box>
    </Box>
  );
};

export default Footer;
