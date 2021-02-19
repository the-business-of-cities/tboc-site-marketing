import { ContentPage } from "tboc-site-components";
import { graphql } from "gatsby";

import Layout from "../layouts/index";
import PropTypes from "prop-types";
import React from "react";

const EventTemplate = ({ data, location }) => {
  return (
    <Layout location={location}>
      <ContentPage
        title={data.contentfulEvent.title}
        image={
          data.contentfulEvent.image && data.contentfulEvent.image.file.url
        }
        description={data.contentfulEvent.description}
        introduction={
          data.contentfulEvent.details && data.contentfulEvent.details.details
        }
      />
    </Layout>
  );
};

EventTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulEvent: PropTypes.object.isRequired,
  }).isRequired,
};

export default EventTemplate;

export const EventQuery = graphql`
  query EventQuery($id: String!) {
    contentfulEvent(id: { eq: $id }) {
      title
      date
      location
      role
      description
      details {
        details
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
