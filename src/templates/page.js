import { ContentPage } from "../components";
import { graphql } from "gatsby";

import Layout from "../layouts/index";
import PropTypes from "prop-types";
import React from "react";

const PageTemplate = ({ data, location }) => {
  return (
    <Layout location={location}>
      <ContentPage
        content={data.contentfulPage.content}
        description={data.contentfulPage.description}
        image={data.contentfulPage.image && data.contentfulPage.image.file.url}
        introduction={data.contentfulPage.introduction.introduction}
        title={data.contentfulPage.title}
        partners={data.contentfulPage.partnerCategory}
      />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulPage: PropTypes.object.isRequired,
  }).isRequired,
};

export default PageTemplate;

export const PageQuery = graphql`
  query PageQuery($id: String!) {
    contentfulPage(id: { eq: $id }) {
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
      partnerCategory {
        title
        partner {
          name
          website
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
