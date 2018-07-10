import { ContentPage, } from "tboc-site-components";

import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const NewsQuery = graphql`
	query NewsQuery($id: String!) {
		contentfulNews(id: { eq: $id }) {
			title
			originalDate
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
			secondaryImage = { data.contentfulNews.image }
			description = { data.contentfulNews.description }
			introduction = { data.contentfulNews.details && data.contentfulNews.details.details }
		>
			{
				console.log(data)
			}
		</ContentPage>
	);
};

NewsTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulNews: PropTypes.object.isRequired,
	}).isRequired,
};

export default NewsTemplate;
