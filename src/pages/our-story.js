import { ContentPage, TeamMembers, } from "tboc-site-components";

import { graphql, } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../layouts/index";

const OurStoryPage = ( { data, location, }, ) => {
	return data.contentfulPage && (
		<Layout location = { location }>
			<ContentPage
				title = { data.contentfulPage.title }
				introduction = { data.contentfulPage.introduction.introduction }
				image = {  data.contentfulPage.image && data.contentfulPage.image.file.url }
			>
				<TeamMembers
					members = { data.contentfulTeamSettings.edges[0].node.teamMembers }
				/>
			</ContentPage>
		</Layout>
	);
};

OurStoryPage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulTeamSettings: PropTypes.object.isRequired,
	}).isRequired,
};

export default OurStoryPage;

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
			...PagePoints
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
						extendedDescription {
							extendedDescription
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