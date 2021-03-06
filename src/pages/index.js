import {
  BlankPage,
  Point,
  Section,
  Container,
  Column,
  Row,
  LogoGrid
} from "../components";

import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import slugify from "slugify";
import styled from "styled-components";
import Layout from "../layouts/index";

const LogoWrapper = styled.div`
  margin-bottom: 1em;
  flex: 1;
  width: 100%;
`;

const HomePage = ({ data, location }) => {
  const homeSettings = data.contentfulHomeSettings.edges[0].node;
  const page = data.contentfulPage;
  const partnerCategory = page.partnerCategory;

  return (
    <Layout location={location}>
      <BlankPage
        banner={{
          text: homeSettings.homeDescription.homeDescription
        }}
        sliderContents={homeSettings.homeBanner}
      >
        {page.content &&
          page.content.map((section, i) => (
            <Point
              bgImage={section?.backgroundImage?.file.url}
              cta={
                section.ctaTarget &&
                section.ctaText && {
                  link: `/${slugify(section.ctaTarget.title, { lower: true })}`,
                  text: section.ctaText
                }
              }
              image={section.image}
              key={i}
              reverse={i % 2 === 0}
              text={section.content.content}
              title={section.title}
              videoUrl={section.videoUrl}
            />
          ))}

        {partnerCategory && partnerCategory[0].partner && (
          <Section>
            <Container>
              <Row restrict>
                <Column>
                  <h1>A Selection of Our Clients and Partners</h1>

                  <LogoWrapper>
                    {partnerCategory.map((category, i) => (
                      <LogoGrid
                        logos={category.partner.map(partner => ({
                          image: partner.image,
                          link: "partners"
                        }))}
                        key={i}
                        logosPerRow={{ xs: 4, sm: 5, md: 7, lg: 9 }}
                      />
                    ))}
                  </LogoWrapper>
                </Column>
              </Row>
            </Container>
          </Section>
        )}
      </BlankPage>
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    contentfulPage: PropTypes.object.isRequired,
    contentfulHomeSettings: PropTypes.object
  }).isRequired
};

export default HomePage;

export const SliderQuery = graphql`
  query SliderQuery {
    contentfulPage(title: { eq: "Home" }) {
      title
      description
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
    contentfulHomeSettings: allContentfulSiteSettings {
      edges {
        node {
          homeDescription {
            homeDescription
          }
          homeBanner {
            ... on ContentfulPublication {
              title
              description
              externalUrl
              image {
                file {
                  url
                }
              }
            }
            ... on ContentfulNews {
              title
              description
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
    }
  }
`;
