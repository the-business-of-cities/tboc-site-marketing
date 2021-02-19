var slugify = require("slugify");
var path = require("path");

/**
 * Implement Gatsby"s Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      loader: {
        test: /velocity/,
        loader: "null-loader"
      }
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const PartnersPage = path.resolve("src/pages/partners.js");
    const OurStoryPage = path.resolve("src/pages/our-story.js");
    const PublicationsPage = path.resolve("src/pages/publications.js");
    const EventsPage = path.resolve("src/pages/events.js");
    const NewsPage = path.resolve("src/pages/news.js");
    const HomePage = path.resolve("src/pages/index.js");
    const JobsPage = path.resolve("src/pages/jobs.js");

    const DefaultPage = path.resolve("src/templates/page.js");
    const EventTemplate = path.resolve("src/templates/event.js");
    const NewsTemplate = path.resolve("src/templates/news.js");
    const PublicationTemplate = path.resolve("src/templates/publication.js");
    const JobTemplate = path.resolve("src/templates/job.js");
    const PartnerTemplate = path.resolve("src/templates/partner.js");

    resolve(
      // Query for markdown nodes to use in creating pages.
      graphql(
        `
          {
            contentfulPages: allContentfulPage {
              edges {
                node {
                  id
                  title
                }
              }
            }
            contentfulPublications: allContentfulPublication {
              edges {
                node {
                  id
                  title
                  externalUrl
                }
              }
            }
            contentfulJobs: allContentfulJob {
              edges {
                node {
                  id
                  title
                }
              }
            }
            contentfulNews: allContentfulNews {
              edges {
                node {
                  id
                  title
                }
              }
            }
            contentfulEvents: allContentfulEvent {
              edges {
                node {
                  id
                  title
                }
              }
            }
            contentfulPartners: allContentfulPartner {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each markdown file.
        result.data.contentfulPages.edges.forEach(({ node }) => {
          const path = `/${slugify(node.title, { lower: true })}`;
          const id = node.id;

          let component = undefined;

          switch (path) {
            case "/partners":
              component = PartnersPage;
              break;
            case "/about-us":
              component = OurStoryPage;
              break;
            case "/publications":
              component = PublicationsPage;
              break;
            case "/events":
              component = EventsPage;
              break;
            case "/news":
              component = NewsPage;
              break;
            case "/home":
              component = HomePage;
              break;
            case "/vacancies":
              component = JobsPage;
              break;
            default:
              component = DefaultPage;
          }

          createPage({
            path,
            component: component,
            context: {
              slug: path,
              id
            }
          });
        });

        result.data.contentfulPublications.edges.forEach(({ node }) => {
          const path = `/publications/${slugify(node.title, { lower: true })}`;
          const id = node.id;
          const url = node.externalUrl;

          !url &&
            createPage({
              path,
              component: PublicationTemplate,
              context: {
                slug: path,
                id
              }
            });
        });

        // Create pages for each markdown file.
        result.data.contentfulJobs.edges.forEach(({ node }) => {
          const path = `/vacancies/${slugify(node.title, { lower: true })}`;
          const id = node.id;

          createPage({
            path,
            component: JobTemplate,
            context: {
              slug: path,
              id
            }
          });
        });

        // Create pages for each markdown file.
        result.data.contentfulNews.edges.forEach(({ node }) => {
          const path = `/news/${slugify(node.title, { lower: true })}`;
          const id = node.id;

          createPage({
            path,
            component: NewsTemplate,
            context: {
              slug: path,
              id
            }
          });
        });

        // Create pages for each markdown file.
        result.data.contentfulEvents.edges.forEach(({ node }) => {
          const path = `/events/${slugify(node.title, { lower: true })}`;
          const id = node.id;

          createPage({
            path,
            component: EventTemplate,
            context: {
              slug: path,
              id
            }
          });
        });

        // Create pages for each markdown file.
        result.data.contentfulPartners.edges.forEach(({ node }) => {
          const path = `/partners/${slugify(node.name, { lower: true })}`;
          const id = node.id;

          createPage({
            path,
            component: PartnerTemplate,
            context: {
              slug: path,
              id
            }
          });
        });
      })
    );
  });
};
