import { ContentPage } from "../components";
import { graphql } from "gatsby";

import Layout from "../layouts/index";
import PropTypes from "prop-types";
import React from "react";

const JobTemplate = ({ data, location }) => {
  return (
    <Layout location={location}>
      <ContentPage
        title={data.contentfulJob.title}
        image={data.contentfulJob.image && data.contentfulJob.image.file.url}
        description={data.contentfulJob.description}
        introduction={
          data.contentfulJob.content && data.contentfulJob.content.content
        }
      />
    </Layout>
  );
};

JobTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulJob: PropTypes.object.isRequired
  }).isRequired
};

export default JobTemplate;

export const JobQuery = graphql`
  query JobQuery($id: String!) {
    contentfulJob(id: { eq: $id }) {
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
