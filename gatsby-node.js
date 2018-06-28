var slugify = require("slugify");
var path = require("path");

/**
 * Implement Gatsby"s Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyWebpackConfig = ({ config, stage, }) => {
	if (stage === "build-html") {
		config.loader("null", {
			test: /velocity/,
			loader: "null-loader",
		});
	};
};

exports.createPages = ({ boundActionCreators, graphql, }) => {
	const { createPage, } = boundActionCreators;

	return new Promise((resolve, reject) => {
		const PageTemplate = path.resolve( "src/templates/page.js" );

		resolve( // Query for markdown nodes to use in creating pages.
			graphql(
				`
					{
						contentfulPages: allContentfulPage {
							edges {
								node {
									id
									title
								}
							}
						}
						contentfulPublications: allContentfulPublication {
							edges {
								node {
									id
									title
								}
							}
						}
						contentfulJobs: allContentfulJob {
							edges {
								node {
									id
									title
								}
							}
						}
						contentfulNews: allContentfulNews {
							edges {
								node {
									id
									title
								}
							}
						}
						contentfulEvents: allContentfulEvent {
							edges {
								node {
									id
									title
								}
							}
						}
					}
				`
			).then(result => {
				if (result.errors) {
					reject(result.errors);
				}

				// Create pages for each markdown file.
				//console.log(result.data);

				// Create pages for each markdown file.
				result.data.contentfulPages.edges.forEach( ( { node, } ) => {
					const path = `/${ slugify(node.title, { lower: true, }) }`;
					const id = node.id;

					createPage({
						path,
						component: PageTemplate,
						context: { // In your blog post template"s graphql query, you can use path as a GraphQL variable to query for data from the markdown file.
							slug: path,
							id
						},
					});
				});

				result.data.contentfulPublications.edges.forEach( ( { node, } ) => {
					const path = `/publications/${ slugify(node.title, { lower: true, }) }`;
					const id = node.id;
					
					createPage({
						path,
						component: PageTemplate,
						context: { // In your blog post template"s graphql query, you can use path as a GraphQL variable to query for data from the markdown file.
							slug: path,
							id,
						},
					});
				});

				// Create pages for each markdown file.
				result.data.contentfulJobs.edges.forEach( ( { node, } ) => {
					const path = `/jobs/${ slugify(node.title, { lower: true, }) }`;
					const id = node.id;
					
					createPage({
						path,
						component: PageTemplate,
						context: { // In your blog post template"s graphql query, you can use path as a GraphQL variable to query for data from the markdown file.
							slug: path,
							id,
						},
					});
				});

				// Create pages for each markdown file.
				result.data.contentfulNews.edges.forEach( ( { node, } ) => {
					const path = `/news/${ slugify(node.title, { lower: true, }) }`;
					const id = node.id;
					
					createPage({
						path,
						component: PageTemplate,
						context: { // In your blog post template"s graphql query, you can use path as a GraphQL variable to query for data from the markdown file.
							slug: path,
							id,
						},
					});
				});

				// Create pages for each markdown file.
				result.data.contentfulEvents.edges.forEach( ( { node, } ) => {
					const path = `/events/${ slugify(node.title, { lower: true, }) }`;
					const id = node.id;
					
					createPage({
						path,
						component: PageTemplate,
						context: { // In your blog post template"s graphql query, you can use path as a GraphQL variable to query for data from the markdown file.
							slug: path,
							id,
						},
					});
				});
			})
		);
	});
};