import { BlankPage, Slider, Point, Section, Container, Row, Column, } from "tboc-site-components";

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
		contentfulBannerSettings: allContentfulSiteSettings {
			edges {
				node {
					homeDescription {
						homeDescription
					}
					homeBanner {
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
`;

// ----------------------------------------------------

const HomePage = ( { data, }, ) => {
	console.log(data);
	return (
		<BlankPage
			slider = { <Slider sliderContents = { data.contentfulBannerSettings.edges[0] }/> }
		>
			<Section>
				<Container narrow>
					<Row>
						<Column>
							<h2>The Business of Cities provides urban intelligence to global cities, firms and decision-makers. We use data, insight and narrative to guide leadership and strategy for those driving future change in the world’s cities.</h2>
						</Column>
					</Row>
				</Container>
			</Section>
			
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