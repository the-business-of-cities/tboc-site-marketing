import { BlankPage, Point, } from "tboc-site-components";

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
				backgroundImage {
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
					}
				}
			}
		}
	}
`;

// ----------------------------------------------------

const HomePage = ( { data, }, ) => {
	return (
		<BlankPage
			banner = { { text: data.contentfulHomeSettings.edges[0].node.homeDescription.homeDescription, } }
			sliderContents = { data.contentfulHomeSettings.edges[0].node.homeBanner }
		>
			{
				data.contentfulPage.content &&
				data.contentfulPage.content.map( (section, i) => (
					<Point
						cta = { (section.ctaTarget && section.ctaText) && {
							link: `/${ slugify(section.ctaTarget.title, { lower: true, }) }`,
							text: section.ctaText,
						} }
						image = { section.image }
						bgImage = { section.backgroundImage && section.backgroundImage.file.url }
						key = { `point-${ slugify(section.title) }` }
						reverse = { i % 2 === 0 }
						text = { section.content.content }
						title = { section.title }
					/>
				) )
			}
		</BlankPage>
	);
};

HomePage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulHomeSettings: PropTypes.object,
	}).isRequired,
};

export default HomePage;