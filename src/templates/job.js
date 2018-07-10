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
				description
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
			secondaryImage = { data.contentfulJob.image }
			description = { data.contentfulJob.description }
			introduction = { data.contentfulJob.details && data.contentfulJob.details.details }
		>
			{
				console.log(data)
			}
		</ContentPage>
	);
};

JobTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulJob: PropTypes.object.isRequired,
	}).isRequired,
};

export default JobTemplate;
