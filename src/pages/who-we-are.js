import { ContentPage, TeamMembers, } from "tboc-site-components";

import PropTypes from "prop-types";
import React from "react";

// ----------------------------------------------------

export const AllTeamMembersQuery = graphql`
	query AllTeamMembersQuery {
		contentfulPage(title: { eq: "Who we are" }) {
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
		contentfulTeamMembers: allContentfulTeamMember {
			edges {
				node {
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
				}
			}
		}
	}
`;

// ----------------------------------------------------

const WhoWeArePage = ( { data, }, ) => {
	console.log(data);

	return (
		<ContentPage
			title = { data.contentfulPage.title }
			introduction = { data.contentfulPage.introduction.introduction }
			content = { data.contentfulPage.content }
		>
			<TeamMembers
				members = { data.contentfulTeamMembers.edges }
			/>
		</ContentPage>
	);
};

WhoWeArePage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulTeamMembers: PropTypes.object.isRequired,
	}).isRequired,
};

export default WhoWeArePage;