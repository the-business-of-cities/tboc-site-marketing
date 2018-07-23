import { ContentPage, } from "tboc-site-components";

import React from "react";
import PropTypes from "prop-types";

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
				backgroundImage {
					file {
						url
					}
				}
				ctaText
				ctaTarget {
					title
				}
			}
			partnerCategory {
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

// ----------------------------------------------------

const PartnersPage = ( { data, }, ) => {
	return data.contentfulPage && (
		<ContentPage
			title = { data.contentfulPage.title }
			introduction = { data.contentfulPage.introduction.introduction }
			content = { data.contentfulPage.content }
			image = {  data.contentfulPage.image && data.contentfulPage.image.file.url }
			partners = { data.contentfulPage.partnerCategory }
		/>
	);
};

PartnersPage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulPartnerCategories: PropTypes.object.isRequired,
	}).isRequired,
};


export default PartnersPage;