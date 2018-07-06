import { ContentPage, LogoGrid, Section, Container, Column, Row, } from "tboc-site-components";

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// ----------------------------------------------------

export const AllPublicationsQuery = graphql`
	query AllPublicationsQuery {
		contentfulPage(title: { eq: "Publications" }) {
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
		contentfulPublications: allContentfulPublication {
			edges {
				node {
					title
				}
			}
		}
	}
`;

// ----------------------------------------------------

const PublicationsPage = ( { data, }, ) => {
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
							{
								data.contentfulPublications.edges.map( category => (
									<div>{ category.title }</div>
								))
							}
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