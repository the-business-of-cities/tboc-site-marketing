import { BlankPage, Point, Section, Container, } from "tboc-site-components";

import React from "react";
import slugify from "slugify";
import PropTypes from "prop-types";

// ----------------------------------------------------

export const SliderQuery = graphql`
	query SliderQuery {
		contentfulPage(title: { eq: "Home" }) {
			title
			description
			content {
				id
				title
				content {
					content
				}
				image {
					file {
						url
					}
				}
				ctaText
				ctaTarget {
					title
				}
			}
		}
		contentfulHomeSettings: allContentfulSiteSettings {
			edges {
				node {
					homeDescription {
						homeDescription
					}
					homeBanner {
						... on ContentfulPublication {
							title
							description
							image {
								file {
									url
								}
							}
						}
						... on ContentfulNews {
							title
							description
							image {
								file {
									url
								}
							}
						}
						... on ContentfulEvent {
							title
							description
							image {
								file {
									url
								}
							}
						}
					}
				}
			}
		}
	}
`;

// ----------------------------------------------------

const HomePage = ( { data, }, ) => {
	const home = data.contentfulHomeSettings.edges[0].node;

	return (
		<BlankPage
			banner = { { text: home.homeDescription.homeDescription, } }
			sliderContents = { home.homeBanner }
		>
			{
				data.contentfulPage.content &&
				data.contentfulPage.content.map( (section, i) => (
					<Section
						key = { `point-${ slugify(section.title) }` }
					>
						<Container restrict>
							<Point
								cta = { (section.ctaTarget && section.ctaText) && {
									link: `/${ slugify(section.ctaTarget.title, { lower: true, }) }`,
									text: section.ctaText,
								} }
								title = { section.title }
								image = { section.image.file.url }
								text = { section.content.content }
								reverse = { i % 2 === 0 }
							/>
						</Container>
					</Section>
				) )
			}
		</BlankPage>
	);
};

HomePage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulPublications: PropTypes.object,
		contentfulEvents: PropTypes.object,
		contentfulNews: PropTypes.object,
	}).isRequired,
};

export default HomePage;