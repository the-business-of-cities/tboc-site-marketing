import { ContentPage, } from "tboc-site-components";

import { graphql, } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import Layout from "../layouts/index";

const PartnersPage = ( { data, location, }, ) => {
	return data.contentfulPage && (
		<Layout location = { location }>
			<ContentPage
				title = { data.contentfulPage.title }
				introduction = { data.contentfulPage.introduction.introduction }
				image = {  data.contentfulPage.image && data.contentfulPage.image.file.url }
				partners = { data.contentfulPage.partnerCategory }
			/>
		</Layout>
	);
};

PartnersPage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulPartnerCategories: PropTypes.object.isRequired,
	}).isRequired,
};


export default PartnersPage;

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
			...PagePoints
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