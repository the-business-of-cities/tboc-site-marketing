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

// ----------------------------------------------------

injectGlobal`
	${ defaultGlobalStyles(theme) }
`;


const TemplateWrapper = props => {
	const {
		navLinks,
		footerLinks,
		footerText,
		linkedinLink,
		twitterLink,
		youtubeLink,
	} = props.data.contentfulSettings.edges[0].node;

	const links = navLinks.filter( link => !link.service );
	const dropdown = navLinks.filter( link => link.service );

	return (
		<ThemeProvider theme = { theme }>
			<div>
				<Head />

				<CookieBanner
					message = "We use cookies on this site. For more information, see our Privacy Policy."
					onAccept = { () => {} }
					cookie = "user-has-accepted-cookies"
				/>

				<Nav
					homepage = { props.location.pathname === "/" }
					links = { links
						.filter( link => !link.service )
						.map( link => {
							return {
								to: `/${ slugify(link.title.toLowerCase()) }`,
								content: link.title,
								as: "gatsby-link",
								dropdown: slugify(link.title.toLowerCase()) === "what-we-do" && 
									dropdown.map( link => {
										return {
											to: `/${ slugify(link.title.toLowerCase()) }`,
											content: link.title,
											as: "gatsby-link",
										};
									}),
							};
						}) 
					}
					logo = { { url: "https://images.ctfassets.net/7k0m7hkot1dm/28C0yQCX5aSKqwyYgSIIIA/08b95dc10f29054e15da2178dbbc3c35/Asset_4_2x.png", text: "tboc", } }
				/>

				{ props.children(...props) }

				<Footer
					footerText = { footerText }
					footerLinks = { footerLinks }
					socialLinks = { [
						{
							type: "youtube",
							link: youtubeLink,
						},
						{
							type: "linkedin",
							link: linkedinLink,
						},
						{
							type: "twitter",
							link: twitterLink,
						},
					] }
				/>
			</div>
		</ThemeProvider>
	);
};

TemplateWrapper.propTypes = {
	children: PropTypes.func.isRequired,
	data: PropTypes.shape({
		contentfulSettings: PropTypes.object,
	}),
	location: PropTypes.object,
};

export default TemplateWrapper;
