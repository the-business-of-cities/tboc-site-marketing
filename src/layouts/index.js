import { ThemeProvider, injectGlobal, } from "styled-components";
import { defaultGlobalStyles, Nav, Head, Footer, } from "tboc-site-components";

import CookieBanner from "react-cookie-banner";
import PropTypes from "prop-types";
import React from "react";
import theme from "./theme";
import slugify from "slugify";

// ----------------------------------------------------

export const SettingsQuery = graphql`
	query SettingsQuery {
		contentfulSettings: allContentfulSiteSettings {
			edges {
				node {
					siteTitle
					siteDescription
					logo {
						file {
							url
						}
					}
					navLinks {
						title
						service
					}
					footerLinks {
						title
					}
				}
			}
		}
	}
`;

// ----------------------------------------------------

injectGlobal`
	${ defaultGlobalStyles(theme) }
`;


const TemplateWrapper = props => {
	return <ThemeProvider theme = { theme }>
		<div>
			<Head />

			<CookieBanner
				message = "We use cookies on this site. For more information, see our Privacy Policy."
				onAccept = { () => {} }
				cookie = "user-has-accepted-cookies"
			/>

			<Nav
				homepage = { props.location.pathname === "/" }
				links = { props.data.contentfulSettings.edges[0].node.navLinks
					.filter( link => !link.service )
					.map( link => {
					return {
						to: slugify(link.title),
						content: link.title,
						as: "gatsby-link",
					};
				}) }
				logo = { { url: "https://images.ctfassets.net/7k0m7hkot1dm/28C0yQCX5aSKqwyYgSIIIA/08b95dc10f29054e15da2178dbbc3c35/Asset_4_2x.png", text: "tboc", } }
			/>

			{ props.children(...props) }

			<Footer/>
		</div>
	</ThemeProvider>
};

TemplateWrapper.propTypes = {
	children: PropTypes.func.isRequired,
	data: PropTypes.shape({
		contentfulSettings: PropTypes.object,
	}),
	location: PropTypes.object,
};

export default TemplateWrapper;
