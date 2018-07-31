import { ContentPage, } from "tboc-site-components";

import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const NewsQuery = graphql`
	query NewsQuery($id: String!) {
		contentfulNews(id: { eq: $id }) {
			title
			description
			content {
				content
			}
			image {
				description
				file {
					url
				}
			}
		}
	}
`;

// ----------------------------------------------------

const NewsTemplate = ( { data, }, ) => {
	return (
		<ContentPage 
			title = { data.contentfulNews.title }
			image = { data.contentfulNews.image && data.contentfulNews.image.file.url }
			description = { data.contentfulNews.description }
			introduction = { data.contentfulNews.details && data.contentfulNews.details.details }
		/>
	);
};

NewsTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulNews: PropTypes.object.isRequired,
	}).isRequired,
};

export default NewsTemplate;
