import { ContentPage, Section, Row, Column, Container, MaybeLink, Testimonial, Publications, } from "tboc-site-components";

import PropTypes from "prop-types";
import React from "react";
import marked from "marked";

// ----------------------------------------------------

export const PartnerQuery = graphql`
	query PartnerQuery($id: String!) {
		contentfulPartner(id: { eq: $id }) {
			name
			website
			description
			image {
				description
				file {
					url
				}
			}
			content {
				content
			}
			publications {
				title
				description
				publishingDate
				image {
					file {
						url
					}
				}
			}
			testimonial {
				title
				quote {
					quote
				}
				quotee
				image {
					description
					file {
						url
					}
				}
			}
		}
	}
`;

// ----------------------------------------------------

const PartnerTemplate = ( { data, }, ) => {
	return (
		<ContentPage 
			title = { data.contentfulPartner.name }
			description = { data.contentfulPartner.description }
		>
			<Section>
				<Container narrow>
					<Row>
						<Column>
							<p><MaybeLink href = { data.contentfulPartner.website }>{ data.contentfulPartner.website }</MaybeLink></p>

							{ data.contentfulPartner.description && 
								<div
									dangerouslySetInnerHTML = { {
										__html: marked(
											data.contentfulPartner.description,
										),
									} }
								/> 
							}
						</Column>
					</Row>
				</Container>
			</Section>

			<Testimonial 
				{ ...data.contentfulPartner.testimonial }
			/>

			{
				data.contentfulPartner.publications &&
				<Section>
					<Container>
						<Row>
							<Column>
								<Publications
									publications = { data.contentfulPartner.publications }
								/>
							</Column>
						</Row>
					</Container>
				</Section>
			}
		</ContentPage>
	);
};

PartnerTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulPartner: PropTypes.object.isRequired,
	}).isRequired,
};

export default PartnerTemplate;
