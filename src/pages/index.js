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
		contentfulPublications: allContentfulPublication {
			edges {
				node {
					title
					description
					image {
						file {
							url
						}
					}
					approximateDate
				}
			}
		}
		contentfulEvents: allContentfulEvent {
			edges {
				node {
					title
					description
					image {
						file {
							url
						}
					}
					date
				}
			}
		}
		contentfulNews: allContentfulNews {
			edges {
				node {
					title
					description
					image {
						file {
							url
						}
					}
					originalDate
				}
			}
		}
	}
`;

// ----------------------------------------------------

const HomePage = ( { data, }, ) => {
	let sliderContents = [];

	data.contentfulPublications.edges.map( edge => sliderContents.push(edge.node));
	data.contentfulEvents.edges.map( edge => sliderContents.push(edge.node));
	data.contentfulNews.edges.map( edge => sliderContents.push(edge.node));

	sliderContents.sort(function(a, b) {
		return (
			new Date(a.date || a.originalDate || a.approximateDate ).getTime() -
			new Date(b.date || b.originalDate || b.approximateDate ).getTime()
		);
	});

	//should be featured??

	sliderContents = sliderContents.slice( 1, 8 );

	return (
		<BlankPage
			slider = { <Slider sliderContents = { sliderContents }/> }
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