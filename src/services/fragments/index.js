export const PointFragment = graphql`
	fragment PagePoints on ContentfulPage {
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
			videoUrl
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
`;