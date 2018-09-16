module.exports = {
	siteMetadata: {
		title: "The Business of Cities",
  		siteUrl: "https://www.thebusinessofcities.com",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-styled-components",
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: "7k0m7hkot1dm",
				accessToken: "cfc110c750c3c3e5ea7916eaef42ce7049bc07713cc7ecf40288cad64ae7cb3b",
			},
		},
		{
			resolve: "gatsby-plugin-favicon",
			options: {
				logo: "./src/images/favicon.png",
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false,
				},
			},
		},
		// {
		// 	resolve: `gatsby-plugin-google-analytics`,
		// 	options: {
		// 		trackingId: "UA-118480978-1", // Puts tracking script in the head instead of the body
		// 		head: false, // Setting this parameter is optional
		// 		anonymize: true, // Setting this parameter is also optional
		// 		respectDNT: true, // Avoids sending pageview hits from custom paths
		// 		exclude: [ "/preview/**", "/do-not-track/me/too/", ],
		// 	},
		// },
		{
			resolve: "gatsby-plugin-sitemap",
		},
	],
};
