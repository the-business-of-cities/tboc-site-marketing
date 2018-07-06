import { ContentPage, LogoGrid, Section, Container, Column, Row, } from "tboc-site-components";

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// ----------------------------------------------------

export const AllNewsQuery = graphql`
	query AllNewsQuery {
		contentfulPage(title: { eq: "News" }) {
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
		contentfulNews: allContentfulNews {
			edges {
				node {
					title
				}
			}
		}
	}
`;

// ----------------------------------------------------

const NewsPage = ( { data, }, ) => {
	return (
		<ContentPage
			title = { data.contentfulPage.title }
			introduction = { data.contentfulPage.introduction.introduction }
			content = { data.contentfulPage.content }
		>
			<Section>
				<Container>
					<Row restrict>
						<Column>
							{
								data.contentfulNews.edges.map( news => (
									<div>{ news.title }</div>
								))
							}
						</Column>
					</Row>
				</Container>
			</Section>
		</ContentPage>
	);
};

NewsPage.propTypes = {
	data: PropTypes.shape({
		contentfulPage: PropTypes.object.isRequired,
		contentfulNews: PropTypes.object.isRequired,
	}).isRequired,
};


export default NewsPage;