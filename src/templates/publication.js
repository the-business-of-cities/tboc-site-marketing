import { ContentPage, } from "tboc-site-components";

import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const PublicationQuery = graphql`
	query PublicationQuery($id: String!) {
		contentfulPublication(id: { eq: $id }) {
			title
			description
			image {
				file {
					url
				}
			}
		}
	}
`;

// ----------------------------------------------------

const PublicationTemplate = ( { data, }, ) => {
	return (
		<ContentPage 
			title = { data.contentfulPublication.title }
			image = { data.contentfulPublication.image && data.contentfulPublication.image.file.url }
			description = { data.contentfulPublication.description }
			introduction = { data.contentfulPublication.details && data.contentfulPublication.details.details }
		>
			{
				console.log(data)
			}
		</ContentPage>
	);
};

PublicationTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulPublication: PropTypes.object.isRequired,
	}).isRequired,
};

export default PublicationTemplate;
