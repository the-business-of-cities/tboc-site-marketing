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
			...PagePoints
		}
		contentfulPublications: allContentfulPublication {
			edges {
				node {
					title
					description
					publishingDate
					showAsPublication
					externalUrl
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
	const publications = data.contentfulPublications
		.edges
		.filter( publication => publication.node.showAsPublication !== false );

	return data.contentfulPage && (
		<ContentPage
			title = { data.contentfulPage.title }
			introduction = { data.contentfulPage.introduction.introduction }
			image = {  data.contentfulPage.image && data.contentfulPage.image.file.url }
		>
			<Section>
				<Container>
					<Row restrict>
						<Column>
							<Publications
								publications = { publications }
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