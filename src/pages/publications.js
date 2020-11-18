import {
  ContentPage,
  Section,
  Container,
  Column,
  Row,
  Publications,
} from "tboc-site-components";

import { graphql, Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import Layout from "../layouts/index";

const PublicationsPage = ({ data, location }) => {
  const publications = data.contentfulPublications.edges.filter(
    (publication) => publication.node.showAsPublication !== false
  );

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
          <Section>
            <Container>
              <Row restrict>
                <Column>
                  <Publications
                    GatsbyLink={Link}
                    sorting={true}
                    publications={publications}
                  />
                </Column>
              </Row>
            </Container>
          </Section>
        </ContentPage>
      </Layout>
    )
  );
};

PublicationsPage.propTypes = {
  data: PropTypes.shape({
    contentfulPage: PropTypes.object.isRequired,
    contentfulPublications: PropTypes.object.isRequired,
  }).isRequired,
};

export default PublicationsPage;

export const AllPublicationsQuery = graphql`
  query AllPublicationsQuery {
    contentfulPage(title: { eq: "Publications" }) {
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
    contentfulPublications: allContentfulPublication {
      edges {
        node {
          title
          description
          publishingDate
          showAsPublication
          externalUrl
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
