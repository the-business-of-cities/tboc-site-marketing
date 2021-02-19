require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: "The Business of Cities",
  	siteUrl: "https://www.thebusinessofcities.com",
	},
	plugins: [
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
				accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
			},
		},
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-styled-components",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "UA-127061321-1", // Puts tracking script in the head instead of the body
				head: false, // Setting this parameter is optional
				anonymize: true, // Setting this parameter is also optional
				respectDNT: true, // Avoids sending pageview hits from custom paths
			},
		},
		"gatsby-transformer-remark",
		{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
		"gatsby-plugin-sitemap",
	],
};

