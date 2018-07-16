import { ContentPage, LogoGrid, Section, Container, Column, Row, } from "tboc-site-components";

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// ----------------------------------------------------

export const AllPartnersQuery = graphql`
	query AllPartnersQuery {
		contentfulPage(title: { eq: "Partners" }) {
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
		contentfulPartnerCategories: allContentfulPartnerCategory {
			edges {
				node {
					title
					partner {
						name
						website
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

const CategoryWrapper = styled.div`
	margin-bottom: 1em;
	flex: 1;
	width: 100%;
`;

// ----------------------------------------------------

const PartnersPage = ( { data, }, ) => {
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
							{
								data.contentfulPartnerCategories.edges.map( category => 
									category.node.partner && (
										<CategoryWrapper key = { category.node.title }>
											<h2>{ category.node.title }</h2>

											<LogoGrid
												logos = { 
													category.node.partner.map(partner => ({
														image: partner.image,
														link: partner.website,
													}))
												}
											/>
										</CategoryWrapper>
									)
								)
							}
						</Column>
					</Row>
				</Container>
			</Section>
		</ContentPage>
	);
};

PartnersPage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulPartnerCategories: PropTypes.object.isRequired,
	}).isRequired,
};


export default PartnersPage;