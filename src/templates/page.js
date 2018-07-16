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
	}
`;

// ----------------------------------------------------

const PageTemplate = ( { data, }, ) => {
	return (
		<ContentPage 
			content = { data.contentfulPage.content }
			description = { data.contentfulPage.description }
			image = {  data.contentfulPage.image && data.contentfulPage.image.file.url }
			introduction = { data.contentfulPage.introduction.introduction }
			title = { data.contentfulPage.title }
		/>
	);
};

PageTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
	}).isRequired,
};

export default PageTemplate;
