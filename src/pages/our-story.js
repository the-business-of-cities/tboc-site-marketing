import { ContentPage, TeamMembers, } from "tboc-site-components";

import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const AllTeamMembersQuery = graphql`
	query AllTeamMembersQuery {
		contentfulPage(title: { eq: "About Us" }) {
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
					description
					file {
						url
						contentType
					}
				}
				backgroundImage {
					description
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
		contentfulTeamSettings: allContentfulSiteSettings {
			edges {
				node {
					teamMembers {
						name
						role
						description {
							description
						}
						image {
							file {
								url
							}
						}
						linkedIn
						twitter
						website
						email
					}
				}
			}
		}
	}
`;

// ----------------------------------------------------

const OurStoryPage = ( { data, }, ) => {
	return data.contentfulPage && (
		<ContentPage
			title = { data.contentfulPage.title }
			introduction = { data.contentfulPage.introduction.introduction }
			content = { data.contentfulPage.content }
			image = {  data.contentfulPage.image && data.contentfulPage.image.file.url }
		>
			<TeamMembers
				members = { data.contentfulTeamSettings.edges[0].node.teamMembers }
			/>
		</ContentPage>
	);
};

OurStoryPage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulTeamSettings: PropTypes.object.isRequired,
	}).isRequired,
};

export default OurStoryPage;