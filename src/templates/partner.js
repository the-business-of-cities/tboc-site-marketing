import { ContentPage, } from "tboc-site-components";

import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const PartnerQuery = graphql`
	query PartnerQuery($id: String!) {
		contentfulPartner(id: { eq: $id }) {
			name
			website
			description
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

const PartnerTemplate = ( { data, }, ) => {
	return (
		<ContentPage 
			title = { data.contentfulPartner.title }
			secondaryImage = { data.contentfulPartner.image }
			description = { data.contentfulPartner.description }
		/>
	);
};

PartnerTemplate.propTypes = {
	data: PropTypes.shape({
		contentfulPartner: PropTypes.object.isRequired,
	}).isRequired,
};

export default PartnerTemplate;
