import type {GatsbyConfig} from "gatsby";

require("dotenv").config({
  path: `.env.development`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["test", "content"],
  singleTypes: ["global"],
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
  },
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `.`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /assets/,
    //     },
    //   },
    // },
  ],
};

export default config;
