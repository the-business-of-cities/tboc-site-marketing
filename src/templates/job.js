import { ContentPage, } from "tboc-site-components";

import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const JobQuery = graphql`
	query JobQuery($id: String!) {
		contentfulJob(id: { eq: $id }) {
			title
			description
			content {
				content
			}
			image {
				file {
					url
				}
			}
		}
	}
`;

// ----------------------------------------------------

const JobTemplate = ( { data, }, ) => {
	return (
		<ContentPage 
			title = { data.contentfulJob.title }
			image = { data.contentfulJob.image && data.contentfulJob.image.file.url }
			description = { data.contentfulJob.description }
			introduction = { data.contentfulJob.details && data.contentfulJob.details.details }
		/>
	);
};

JobTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulJob: PropTypes.object.isRequired,
	}).isRequired,
};

export default JobTemplate;
