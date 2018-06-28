import marked from "marked";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import { GenericPage, Point, } from "tboc-site-components";

// ----------------------------------------------------

export const PageQuery = graphql`
	query PageQuery($id: String!) {
		contentfulPage(id: { eq: $id }) {
			title
			description
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
	}
`;

// ----------------------------------------------------

const PageTemplate = ( { data, }, ) => {
	return (
		<GenericPage 
			title = { data.contentfulPage.title }
			secondaryImage = { data.contentfulPage.secondaryImage }
			description = { data.contentfulPage.description }
			introduction = { data.contentfulPage.introduction }
		>
			{
				data.contentfulPage.content &&
				data.contentfulPage.content.map( (section, i) => (
					<Point
						cta = { {
							link: `/${ slugify(section.ctaTarget.title, { lower: true, }) }`,
							text: section.ctaText,
						} }
						image = { section.image.file.url }
						text = { section.content.content }
						reverse = { i % 2 === 0 }
						{ ...section }
					/>
				) )
			}
		</GenericPage>
	);
};

export default PageTemplate;
