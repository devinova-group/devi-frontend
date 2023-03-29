import * as React from "react";
import Box from "../library/Box";
import Flex from "../library/Flex";

/* type HeaderData = {
  strapiHeader: {
    navitems: [
      {
        title: string;
        link: string;
      }
    ];
  };
}; */

const Header = () => {
  /* const headerQuery: HeaderData = useStaticQuery(
    graphql`
      query {
        strapiHeader {
          navitems {
            title
            link
          }
        }
      }
    `
  ); */
  return (
    <Box variant="box.header">
      {/* <img src="" alt="" /> */}
      {/* <button
        onClick={(e) => {
          setColorMode(colorMode === "light" ? "dark" : "light");
        }}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </button> */}
      <Flex as="nav">
        {/*  {headerQuery.strapiHeader.navitems.map((item, i) => {
          return (
            <NavLink key={i} p={2}>
              {item.title}
            </NavLink>
          );
        })} */}
      </Flex>
    </Box>
  );
};

export default Header;
