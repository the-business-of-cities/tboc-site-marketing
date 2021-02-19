import {
  ContentPage,
  Section,
  Container,
  Column,
  Row,
  News,
} from "../components";

import { graphql, Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import Layout from "../layouts/index";

const NewsPage = ({ data, location }) => {
  return (
    data.contentfulPage && (
      <Layout location={location}>
        <ContentPage
          title={data.contentfulPage.title}
          introduction={data.contentfulPage.introduction.introduction}
          content={data.contentfulPage.content}
          image={
            data.contentfulPage.image && data.contentfulPage.image.file.url
          }
        >
          <Section>
            <Container>
              <Row restrict>
                <Column>
                  <News GatsbyLink={Link} news={data.contentfulNews.edges} />
                </Column>
              </Row>
            </Container>
          </Section>
        </ContentPage>
      </Layout>
    )
  );
};

NewsPage.propTypes = {
  data: PropTypes.shape({
    contentfulPage: PropTypes.object.isRequired,
    contentfulNews: PropTypes.object.isRequired,
  }).isRequired,
};

export default NewsPage;

export const AllNewsQuery = graphql`
  query AllNewsQuery {
    contentfulPage(title: { eq: "News" }) {
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
    contentfulNews: allContentfulNews {
      edges {
        node {
          title
          description
          publishingDate
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
