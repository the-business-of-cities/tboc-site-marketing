import { ContentPage, } from "tboc-site-components";

import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const EventQuery = graphql`
	query EventQuery($id: String!) {
		contentfulEvent(id: { eq: $id }) {
			title
			date
			location
			role
			description
			details {
				details
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

const EventTemplate = ( { data, }, ) => {
	return (
		<ContentPage 
			title = { data.contentfulEvent.title }
			secondaryImage = { data.contentfulEvent.image }
			description = { data.contentfulEvent.description }
			introduction = { data.contentfulEvent.details && data.contentfulEvent.details.details }
		/>
	);
};

EventTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulEvent: PropTypes.object.isRequired,
	}).isRequired,
};

export default EventTemplate;
