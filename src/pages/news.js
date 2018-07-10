import { ContentPage, Section, Container, Column, Row, News, } from "tboc-site-components";

import React from "react";
import PropTypes from "prop-types";

// ----------------------------------------------------

export const AllNewsQuery = graphql`
	query AllNewsQuery {
		contentfulPage(title: { eq: "News" }) {
			title
			description
			introduction {
				introduction
			}
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
		contentfulNews: allContentfulNews {
			edges {
				node {
					title
					image {
						file {
							url
						}
					}
				}
			}
		}
	}
`;

// ----------------------------------------------------

const NewsPage = ( { data, }, ) => {
	return (
		<ContentPage
			title = { data.contentfulPage.title }
			introduction = { data.contentfulPage.introduction.introduction }
			content = { data.contentfulPage.content }
		>
			<Section>
				<Container>
					<Row restrict>
						<Column>
							<News
								news = { data.contentfulNews.edges }
							/>
						</Column>
					</Row>
				</Container>
			</Section>
		</ContentPage>
	);
};

NewsPage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulNews: PropTypes.object.isRequired,
	}).isRequired,
};


export default NewsPage;