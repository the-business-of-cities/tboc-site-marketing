import { ContentPage } from "tboc-site-components";
import { graphql } from "gatsby";

import Layout from "../layouts/index";
import PropTypes from "prop-types";
import React from "react";

const PublicationTemplate = ({ data, location }) => {
  return (
    <Layout location={location}>
      <ContentPage
        title={data.contentfulPublication.title}
        image={
          data.contentfulPublication.image &&
          data.contentfulPublication.image.file.url
        }
        description={data.contentfulPublication.description}
        introduction={
          data.contentfulPublication.content &&
          data.contentfulPublication.content.content
        }
      />
    </Layout>
  );
};

PublicationTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulPublication: PropTypes.object.isRequired,
  }).isRequired,
};

export default PublicationTemplate;

export const PublicationQuery = graphql`
  query PublicationQuery($id: String!) {
    contentfulPublication(id: { eq: $id }) {
      title
      description
      content {
        content
      }
      image {
        description
        file {
          url
        }
      }
    }
  }
`;
