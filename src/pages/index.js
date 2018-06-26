import React from "react";

import { Page, Section, Container, Row, Column, Slider, } from "tboc-site-components";

// ----------------------------------------------------

export const SliderQuery = graphql`
	query SliderQuery {
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
			<Section>
				<Container>
					<Row>
						<Slider sliderContents = { sliderContents }/>
					</Row>
				</Container>
			</Section>

			<Section>
				<Container restrict>
					<Row>
						<Column>
							Hello World
						</Column>
					</Row>

					<Row>
						<Column>
							Hello World
						</Column>
					</Row>
				</Container>
			</Section>
		</Page>
	);
};

export default HomePage;