import { ContentPage } from "tboc-site-components";
import { graphql } from "gatsby";

import Layout from "../layouts/index";
import PropTypes from "prop-types";
import React from "react";

const NewsTemplate = ({ data, location }) => {
  return (
    <Layout location={location}>
      <ContentPage
        title={data.contentfulNews.title}
        image={data.contentfulNews.image && data.contentfulNews.image.file.url}
        description={data.contentfulNews.description}
        introduction={
          data.contentfulNews.content && data.contentfulNews.content.content
        }
      />
    </Layout>
  );
};

NewsTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulNews: PropTypes.object.isRequired,
  }).isRequired,
};

export default NewsTemplate;

export const NewsQuery = graphql`
  query NewsQuery($id: String!) {
    contentfulNews(id: { eq: $id }) {
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
