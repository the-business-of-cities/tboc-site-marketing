import { Page, Slider, Point, } from "tboc-site-components";

import React from "react";
import slugify from "slugify";

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

	sliderContents = sliderContents.slice( 1, 8 );

	return (
		<Page>
			<Slider sliderContents = { sliderContents }/>
			
			{
				data.contentfulPage.content &&
				data.contentfulPage.content.map( (section, i) => (
					<Point
						cta = { {
							link: `/${ slugify(section.ctaTarget.title, { lower: true, }) }`,
							text: section.ctaText,
						} }
						title = { section.title }
						image = { section.image.file.url }
						text = { section.content.content }
						reverse = { i % 2 === 0 }

					/>
				) )
			}
		</Page>
	);
};

export default HomePage;