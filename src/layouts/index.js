import { createGlobalStyle, ThemeProvider } from "styled-components";
import { defaultGlobalStyles } from "../utils/styles";

import { Nav, Head, Footer } from "../components";
import { StaticQuery, graphql, Link } from "gatsby";

import CookieBanner from "react-cookie-banner";
import PropTypes from "prop-types";
import React from "react";
import theme from "../utils/styles/themes/theme";
import slugify from "slugify";

const GlobalStyle = createGlobalStyle`
	${defaultGlobalStyles(theme)}
`;

const TemplateWrapper = props => {
  const {
    logo,
    navLinks,
    footerLinks,
    footerText,
    linkedinLink,
    twitterLink,
    youtubeLink
  } = props.data.contentfulSettings.edges[0].node;

  const links = navLinks.filter(link => !link.service);
  const dropdown = navLinks.filter(link => link.service);

  theme.site = {
    siteTitle: props.data.contentfulSettings.edges[0].node.siteTitle,
    siteDescription:
      props.data.contentfulSettings.edges[0].node.siteDescription,
    url: "https://www.thebusinessofcities.com/"
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Head
          theme={theme}
          site={theme.site}
          page={{
            path: props.location.pathname.split("/").join("/"),
            slug: props.location.pathname.split("/").join("/")
          }}
          image={props.data.contentfulSettings.edges[0].node.logo.file.url}
        />

        <CookieBanner
          message="We use cookies on this site. For more information, see our Privacy Policy."
          onAccept={() => {}}
          cookie="user-has-accepted-cookies"
        />

        <Nav
          theme={theme}
          homepage={props.location.pathname === "/"}
          links={links
            .filter(link => !link.service)
            .map(link => {
              return {
                to: `/${slugify(link.title, { lower: true })}`,
                content: link.title,
                as: "gatsby-link",
                dropdown:
                  slugify(link.title, { lower: true }) === "what-we-do" &&
                  dropdown.map(link => {
                    return {
                      to: `/${slugify(link.title, { lower: true })}`,
                      content: link.title,
                      as: "gatsby-link"
                    };
                  })
              };
            })}
          logo={{ url: logo.file.url, text: logo.description }}
        />

        {props.children}

        <Footer
          footerText={footerText}
          footerLinks={footerLinks}
          socialLinks={[
            {
              type: "youtube",
              link: youtubeLink
            },
            {
              type: "linkedin",
              link: linkedinLink
            },
            {
              type: "twitter",
              link: twitterLink
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.any,
  data: PropTypes.shape({
    contentfulSettings: PropTypes.object
  }),
  location: PropTypes.object
};

export default ({ children, location }) => (
  <StaticQuery
    query={SettingsQuery}
    render={data => (
      <TemplateWrapper data={data} location={location} children={children} />
    )}
  />
);

export const SettingsQuery = graphql`
  query SettingsQuery {
    contentfulSettings: allContentfulSiteSettings {
      edges {
        node {
          siteTitle
          siteDescription
          logo {
            description
            file {
              url
            }
          }
          navLinks {
            title
            service
          }
          footerText
          footerLinks {
            title
          }
          linkedinLink
          twitterLink
          youtubeLink
        }
      }
    }
  }
`;
