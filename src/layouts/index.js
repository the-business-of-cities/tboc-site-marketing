import { ThemeProvider, injectGlobal, } from "styled-components";
import { defaultGlobalStyles, Nav, Head, Footer, } from "tboc-site-components";

import CookieBanner from "react-cookie-banner";
import PropTypes from "prop-types";
import React from "react";
import theme from "./theme";

// ----------------------------------------------------

const Links = [
	{
		to: "/our-story/",
		content: "Our Story",
		as: "gatsby-link",
	},
	{
		to: "/who-we-are/",
		content: "Who We Are",
		as: "gatsby-link",
	},
	{
		to: "/work/",
		content: "Work",
		as: "gatsby-link",
	},
	{
		to: "/partners/",
		content: "Partners",
		as: "gatsby-link",
	},
	{
		to: "/publications/",
		content: "Publications",
		as: "gatsby-link",
	},
	{
		to: "/events/",
		content: "Events",
		as: "gatsby-link",
	},
	{
		to: "/contact-us/",
		content: "Contact Us",
		as: "gatsby-link",
	},
];

// ----------------------------------------------------

injectGlobal`
	${ defaultGlobalStyles(theme) }
`;

const TemplateWrapper = props => (
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
				links = { Links }
				logo = { { url: "https://images.ctfassets.net/7k0m7hkot1dm/28C0yQCX5aSKqwyYgSIIIA/08b95dc10f29054e15da2178dbbc3c35/Asset_4_2x.png", text: "tboc", } }
			/>

			{ props.children(...props) }

			<Footer/>
		</div>
	</ThemeProvider>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func.isRequired,
	location: PropTypes.object,
};

export default TemplateWrapper;
