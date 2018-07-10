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
		const PartnersPage = path.resolve( "src/pages/partners.js" );
		const OurStoryPage = path.resolve( "src/pages/our-story.js" );
		const PublicationsPage = path.resolve( "src/pages/publications.js" );
		const EventsPage = path.resolve( "src/pages/events.js" );
		const NewsPage = path.resolve( "src/pages/news.js" );
		const HomePage = path.resolve( "src/pages/index.js" );
		
		const DefaultPage = path.resolve( "src/templates/page.js" );
		const EventTemplate = path.resolve( "src/templates/event.js" );
		const NewsTemplate = path.resolve( "src/templates/news.js" );
		const PublicationTemplate = path.resolve( "src/templates/publication.js" );
		const JobTemplate = path.resolve( "src/templates/job.js" );
		//const PartnerTemplate = path.resolve( "src/templates/partner.js" );

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
				result.data.contentfulPages.edges.forEach( ( { node, } ) => {
					const path = `/${ slugify(node.title, { lower: true, }) }`;
					const id = node.id;

					let component = undefined;

					switch(path) {
					case "/partners":
						component = PartnersPage;
						break;
					case "/our-story":
						component = OurStoryPage;
						break;
					case "/publications":
						component = PublicationsPage;
						break;
					case "/events":
						component = EventsPage;
						break;
					case "/news":
						component = NewsPage;
						break;
					case "/home":
						component = HomePage;
						break;
					default:
						component = DefaultPage;
					}

					createPage({
						path,
						component: component,
						context: {
							slug: path,
							id,
						},
					});
				});

				result.data.contentfulPublications.edges.forEach( ( { node, } ) => {
					const path = `/publications/${ slugify(node.title, { lower: true, }) }`;
					const id = node.id;
					
					createPage({
						path,
						component: PublicationTemplate,
						context: {
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
						component: JobTemplate,
						context: {
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
						component: NewsTemplate,
						context: {
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
						component: EventTemplate,
						context: {
							slug: path,
							id,
						},
					});
				});
			})
		);
	});
};