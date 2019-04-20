import { ContentPage, Section, Container, Column, Row, Jobs, } from "tboc-site-components";
import Layout from '../layouts/index';

import React from "react";
import PropTypes from "prop-types";

// ----------------------------------------------------

export const AllJobsQuery = graphql`
	query AllJobsQuery {
		contentfulPage(title: { eq: "Vacancies" }) {
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
		contentfulJobs: allContentfulJob {
			edges {
				node {
					title
					description
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

const JobsPage = ( { data, location, }, ) => {
	const jobs = data.contentfulJobs.edges;

	return data.contentfulPage && (
		<Layout location={location}>
			<ContentPage
				title = { data.contentfulPage.title }
				introduction = { data.contentfulPage.introduction.introduction }
				image = {  data.contentfulPage.image && data.contentfulPage.image.file.url }
			>
				<Section>
					<Container>
						<Row restrict>
							<Column>
								<Jobs
									jobs = { jobs }
								/>
							</Column>
						</Row>
					</Container>
				</Section>
			</ContentPage>
		</Layout>
	);
};

JobsPage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulJobs: PropTypes.object.isRequired,
	}).isRequired,
};


export default JobsPage;