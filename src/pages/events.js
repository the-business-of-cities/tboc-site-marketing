import { ContentPage, Events } from "../components";
import { graphql, Link } from "gatsby";

import Layout from "../layouts/index";
import React from "react";
import PropTypes from "prop-types";

const PartnersPage = ({ data, location }) => {
  return (
    data.contentfulPage && (
      <Layout location={location}>
        <ContentPage
          title={data.contentfulPage.title}
          introduction={data.contentfulPage.introduction.introduction}
          image={
            data.contentfulPage.image && data.contentfulPage.image.file.url
          }
        >
          <Events events={data.contentfulEvents.edges} GatsbyLink={Link} />
        </ContentPage>
      </Layout>
    )
  );
};

PartnersPage.propTypes = {
  data: PropTypes.shape({
    contentfulPage: PropTypes.object.isRequired,
    contentfulEvents: PropTypes.object.isRequired,
  }).isRequired,
};

export default PartnersPage;

export const AllEventsQuery = graphql`
  query AllEventsQuery {
    contentfulPage(title: { eq: "Events" }) {
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
    contentfulEvents: allContentfulEvent {
      edges {
        node {
          title
          location
          role
          date
          link
        }
      }
    }
  }
`;
