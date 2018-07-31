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
			image {
				file {
					url
				}
			}
			content {
				id
				title
				content {
					content
				}
				image {
					description
					file {
						url
						contentType
					}
				}
				backgroundImage {
					description
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
					description
					publishingDate
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
	return data.contentfulPage && (
		<ContentPage
			title = { data.contentfulPage.title }
			introduction = { data.contentfulPage.introduction.introduction }
			content = { data.contentfulPage.content }
			image = {  data.contentfulPage.image && data.contentfulPage.image.file.url }
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