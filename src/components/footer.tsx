import { useStaticQuery, graphql } from "gatsby";
import * as React from "react";
import { Box, NavLink, SxProp } from "theme-ui";
import Text from "../library/Text";
import deviLogo from "../icons/deviLogo.svg";
import inIcon from "../icons/in.svg";
import insta from "../icons/insta.svg";
import twitter from "../icons/twitter.svg";
import Image from "../library/Image";

const mock = {
  title: "Gothenburg office",
  email: "info@devinova.se",
  adress: "Fabriksgatan 7, 412 50",
  number: "+46 73 250 0582",
  location: "Gothenburg, Sweden",
};

interface FooterData {
  strapiFooter: {
    adress: string;
    email: string;
    number: string;
    location: string;
  };
}

const Footer = () => {
  const footerQuery: FooterData = useStaticQuery(
    graphql`
      query MyQuery {
        strapiFooter {
          adress
          email
          number
          location
        }
      }
    `
  );
  console.log(footerQuery);
  return (
    <Box sx={container}>
      <Box>
        <Text>{footerQuery.strapiFooter.adress}</Text>;
      </Box>
      <Box sx={{ marginLeft: "4rem", marginTop: "3rem" }}>
        <Text variant="H6">{mock.title}</Text>
        <br />
        <Text variant="Body1" sx={{ color: "modes.dark.text" }}>
          {mock.adress}
        </Text>
        <Text variant="Body1">{mock.location}</Text>
        <Text variant="Body1">{mock.email}</Text>
        <Text variant="Body1">{mock.number}</Text>
      </Box>
      <Box sx={{ marginTop: "3rem", display: "flex", flexDirection: "column" }}>
        <Image src={deviLogo} sx={{ height: "3rem" }} />
        <Box sx={{ marginTop: "1rem", display: "flex", flexDirection: "row" }}>
          <NavLink>
            <Text variant="Caption">People</Text>
          </NavLink>
          <li>
            <NavLink>
              <Text variant="Caption">Data & Privacy</Text>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <Text variant="Caption">Manage Cookies</Text>
            </NavLink>
          </li>
        </Box>
      </Box>
      <Box
        sx={{
          marginRight: "4rem",
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          "@media screen and (max-width: 40em)": {
            marginBottom: "3rem",
          },
        }}
      >
        <Text variant="Caption">
          Follow us on social media for regular updates.
        </Text>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            marginTop: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={inIcon} sx={{ height: "2rem" }} />
          <Image src={insta} sx={{ height: "2rem" }} />
          <Image src={twitter} sx={{ height: "2rem" }} />
        </Box>
      </Box>
    </Box>
  );
};

const container = {
  height: "15rem",
  position: "fixed",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  bottom: "0",
  width: "100%",
  backgroundColor: "footer.footerBackground",
  "@media screen and (max-width: 40em)": {
    height: "20rem",
    flexDirection: "column",
  },
};

export default Footer;
