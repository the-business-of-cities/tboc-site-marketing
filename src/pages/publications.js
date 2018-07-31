import { ContentPage, Section, Container, Column, Row, Publications, } from "tboc-site-components";

import React from "react";
import PropTypes from "prop-types";

// ----------------------------------------------------

export const AllPublicationsQuery = graphql`
	query AllPublicationsQuery {
		contentfulPage(title: { eq: "Publications" }) {
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
		contentfulPublications: allContentfulPublication {
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

const PublicationsPage = ( { data, }, ) => {
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
							<Publications
								publications = { data.contentfulPublications.edges }
							/>
						</Column>
					</Row>
				</Container>
			</Section>
		</ContentPage>
	);
};

PublicationsPage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulPublications: PropTypes.object.isRequired,
	}).isRequired,
};


export default PublicationsPage;