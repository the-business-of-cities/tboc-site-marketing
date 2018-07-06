import { ContentPage, } from "tboc-site-components";

import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const PageQuery = graphql`
	query PageQuery($id: String!) {
		contentfulPage(id: { eq: $id }) {
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
	}
`;

// ----------------------------------------------------

const PageTemplate = ( { data, }, ) => {
	return (
		<ContentPage 
			title = { data.contentfulPage.title }
			secondaryImage = { data.contentfulPage.secondaryImage }
			description = { data.contentfulPage.description }
			introduction = { data.contentfulPage.introduction.introduction }
			content = { data.contentfulPage.content }
		/>
	);
};

PageTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
	}).isRequired,
};

export default PageTemplate;
