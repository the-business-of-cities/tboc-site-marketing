import { ContentPage, Events, } from "tboc-site-components";

import React from "react";
import PropTypes from "prop-types";

// ----------------------------------------------------

export const AllEventsQuery = graphql`
	query AllEventsQuery {
		contentfulPage(title: { eq: "Events" }) {
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
		contentfulEvents: allContentfulEvent {
			edges {
				node {
					title
					location
					role
					date
				}
			}
		}
	}
`;

// ----------------------------------------------------

const PartnersPage = ( { data, }, ) => {
	return (
		<ContentPage
			title = { data.contentfulPage.title }
			introduction = { data.contentfulPage.introduction.introduction }
			content = { data.contentfulPage.content }
		>
			<Events events = { data.contentfulEvents.edges }/>
		</ContentPage>
	);
};

PartnersPage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulEvents: PropTypes.object.isRequired,
	}).isRequired,
};


export default PartnersPage;