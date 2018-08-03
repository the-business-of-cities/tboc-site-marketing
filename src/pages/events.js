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
			image {
				file {
					url
				}
			}
			...PagePoints
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
	return data.contentfulPage && (
		<ContentPage
			title = { data.contentfulPage.title }
			introduction = { data.contentfulPage.introduction.introduction }
			content = { data.contentfulPage.content }
			image = {  data.contentfulPage.image && data.contentfulPage.image.file.url }
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