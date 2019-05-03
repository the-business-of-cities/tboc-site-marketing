import { ContentPage, Section, Row, Column, Container, MaybeLink, Testimonial, Publications, } from "tboc-site-components";

import PropTypes from "prop-types";
import React from "react";
import marked from "marked";
import { Link, } from "gatsby";

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
			subtitle = { data.contentfulPartner.website && <MaybeLink GatsbyLink = { Link } href = { data.contentfulPartner.website }>{ data.contentfulPartner.website }</MaybeLink> }
			description = { data.contentfulPartner.description }
		>
			{
				data.contentfulPartner.content &&
				<Section>
					<Container narrow>
						{ 
							data.contentfulPartner.content.content &&
							<Row>
								<Column>
									<div
										dangerouslySetInnerHTML = { {
											__html: marked(
												data.contentfulPartner.content.content,
											),
										} }
									/>
								</Column>
							</Row>
						}
					</Container>
				</Section>
			}

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
									GatsbyLink = { Link }
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
